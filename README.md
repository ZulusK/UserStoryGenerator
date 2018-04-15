# User-story-generator


Simple converts input JSON-file with user stories to TXT-file in format "Me <role\>, want <action\>, that <why\>" 

### Prerequisites

You need have installed Node.js environment and npm manager. [Here is link to tutorial](https://www.npmjs.com/get-npm) 


## Getting Started

1. Make sure you have npm installed. Then install dependencies with command
    ```bash
    npm i
    ```
2. Create input JSON-file like [this](stories.json)
3. Run program with command 
    ```bash
    npm start inputFilename outpurFilename[optional]
    ``` 
## Running the tests    
#### Lint code
Lint code of server using rules, defined in [.eslintrc.js](.eslintrc.js) file
```bash
npm run lint
```    
## Built With

* [Node.js](https://nodejs.org/)


## Authors

* **Kazimirov Danil** - *Full stack development* - [ZulusK]((https://github.com/ZulusK))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
