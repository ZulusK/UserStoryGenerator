const log=require("./log")(module);
const FS=require("mz/fs");
const path=require("path");

const RULES={
    "role":"я",
    "action":"хочу",
    "goal":"чтобы"
};
const DEFAULT_OUTPUT_FILE_NAME="output.txt";

async function main(){
    if(process.argv.length<3){
        log.error("No filename found. Please specify input file in command-line args");
        process.exit();
    }
    const filename=process.argv[2];
    if(!/^.+\.json$/.test(filename)){
        log.error("Invalid file-type. Use JSON-notation");
        process.exit();
    }
    try{
        let JSONdata=require(path.resolve(__dirname,filename));
        let currRules=JSONdata.rules||RULES;
        let userStories=JSONdata.data.map(story=>`${currRules.role} <${story.role}>, ${currRules.action} <${story.action}>, ${currRules.goal} <${story.goal}>\n`).join("\n");
        log.info(userStories);
        await FS.writeFile(process.argv[3]||DEFAULT_OUTPUT_FILE_NAME,userStories);
    }catch (e) {
        log.error(JSON.stringify(e, ["message", "arguments", "type", "name"]));
        process.exit();
    }
    log.info("Done");
}

main();