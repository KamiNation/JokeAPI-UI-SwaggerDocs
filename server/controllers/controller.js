import { jokes } from "../database/jokes.js"
import fs from "fs"


const data = jokes


export const homepage = (req, res) => {
    const testRand = Math.floor(Math.random() * 100) + 1
    console.log(testRand);
    try {
        res.render("index.ejs", { joker: "Hit the different routes we have to get your jokes... ", testRand })
    } catch (error) {
        console.error(error.message);
    }
}


export const random = (req, res) => {
    const { rawHeaders, method } = res.req
    console.log("rawHeaders logged ==>", rawHeaders);
    console.log("methods logged ==>", method);
    try {
        res.render("index.ejs", { joker: JSON.stringify(data[Math.floor(Math.random() * data.length)]) })
    } catch (error) {
        console.error(error.message);
    }
}


export const specifiJoke = (req, res) => {
    const { rawHeaders, method } = res.req
    console.log("rawHeaders logged from specificJoke ==>", rawHeaders);
    console.log("methods logged specificJoke ==>", method);
    try {
        const seeReqOOO = req
        console.log("req from specificJoke =>",seeReqOOO);
        const seeBodyOOO = req.body
        console.log("req.body from specificJoke =>",seeBodyOOO);
        const id = req.body.id
        console.log("req.body.id from specificJoke =>",id);

        let inData = true

        inData = data.includes(id)
        console.log("InData =>",inData);

        for (let index = 0; index < data.length; index++) {
            if (id == data[index].id) {
                res.render("index.ejs", { joker: JSON.stringify(data[index]) })
            } else if (id == '') {
                res.render("index.ejs", { joker: "Id is an empty string....." })
            }
        }

        if (inData == false ) {
            res.render("index.ejs", { joker: "Id does not exist....." })
        }
    } catch (error) {
        console.error(error.message);
    }
}


export const filter = (req, res) => {
    const { rawHeaders, method } = res.req
    console.log("rawHeaders logged from FILTER ==>", rawHeaders);
    console.log("methods logged FILTER ==>", method);
    const { textx, type } = req.body
    let filtertext = textx || type || ""
    try {
        const typeFilter = data.filter((types) => {

            // Object.values(types) would return an array containing all the values of the item object. 

            // The .join() method in JavaScript is used to concatenate the elements of an array into a
            // single string. When you call .join(''), you're specifying an empty string '' as the 
            // separator between the elements of the array. It simply concatenates all the elements of 
            // the array into a single string without adding any additional characters between them.

            // The toLowerCase method changes the string values into lowercase.

            // And lastly, we are checking if this string includes our type that is been typed into 
            // the type input bar. We also convert it to lowercase to make sure that if we type our term in 
            // uppercase, it converts the string to lowercase.

            return Object.values(types).join('').toLowerCase().includes(filtertext.toLowerCase())

        })
        console.log(typeFilter);
        res.render("index.ejs", { joker: JSON.stringify(typeFilter) })
    } catch (error) {
        console.error(error);
    }

}



export const newJoke = (req, res) => {
    const { rawHeaders, method } = res.req
    console.log("rawHeaders logged from newJoke ==>", rawHeaders);
    console.log("methods logged newJoke ==>", method);
    try {

        const type = req.body.type
        const textx = req.body.textx
        console.log(type);
        console.log(textx);

        let lastElement = data[data.length - 1].id
        let newLastElement = lastElement + 1
        let currentObject = { id: newLastElement, jokeText: textx, jokeType: type }
        console.log(currentObject);

        data.push(currentObject)
        res.render("index.ejs", { joker: "Joke has been created..." })

        console.log(lastElement)
        console.log(newLastElement);
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}




export const putJoke = (req, res) => {
    const { rawHeaders, method } = res.req
    console.log("rawHeaders logged from putJoke ==>", rawHeaders);
    console.log("methods logged putJoke ==>", method);

    const { textx, type, id } = req.body

    const typer = type
    console.log('tyr;', typer);
    console.log('tyr;', typeof typer);

    const textrx = textx
    console.log('txtrx;', textrx);
    console.log('txtrx;', typeof textrx);

    const idr = id
    console.log('idr;', idr);
    console.log('idr;', typeof idr);

    try {

        const indexOfId = data.findIndex(find => find.id === Number(idr))
        console.log('IndexofId', indexOfId);

        if (indexOfId !== -1) {
            // If an item with the matching ID is found, replace it with a new object
            data[indexOfId] = {
                id: idr,
                jokeText: textrx,
                jokeType: typer
            };

            console.log('Item replaced:', data[indexOfId]);
        } else {
            console.log('Item not found for ID:', idr);
        }

        res.render("index.ejs", { joker: JSON.stringify(data[indexOfId]) })


    } catch (error) {
        console.error(error.message);

    }
}


export const deleteJokeById = (req, res) => {
    const { rawHeaders, method } = res.req
    console.log("rawHeaders logged from putJoke ==>", rawHeaders);
    console.log("methods logged putJoke ==>", method);

    const { id } = req.body

    const delId = id
    console.log(delId);


    try {
        const indexOfId = data.findIndex(find => find.id === Number(id))
        console.log(indexOfId);

        data.splice(indexOfId, 1)

        res.render("index.ejs", { joker: `Joke deleted by Id ${id}` })

    } catch (error) {

    }
}


export const notFound = (req, res) => {

    try {
        res.render("index.ejs", { joker: "Route not found, check route again" })
        console.log(joker);

    } catch (error) {
        console.error(error.message);
    }
}


