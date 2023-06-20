const fs = require("fs");
const process = require("process");
const { request } = require("../utils/request");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(Date())
}

function echo(print, args) {
    print(args)
}

function ls(print) {
    fs.readdir('.', (error, files)=>{
        if(error) throw Error(error)
        print(files.join(' '))
    })
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw Error(error)
        print(data)
    })
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw Error(error)
        print(data.split('\n')[0])
    })
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data)=>{
        if(error) throw Error(error)
        const lastLines = data.split('\n')
        print(lastLines.at(-1).trim())
    })
}

function curl(print, args) {
    request(args, (error, response)=>{
        if(error) throw Error(error)
        print(response)
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
