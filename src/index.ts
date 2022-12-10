
import fs from "fs"
import {isNull} from "util";


// // 输出参数
// process.argv.forEach(element => {
//     console.log(element)
// });
//
// console.log("hello world ")

let CELL_SEPERATOR = "\t"
let USE_BY = new  Map([
    ['A', true],
    ['S', true],
    ['C', true],
    ['N', true]
])

interface Cellerface {
    Tostring():string
}

class NumberCell implements Cellerface {
    value:number = 0
    Tostring(): string {
        return this.value.toString()
    }
}

type parseFunc = (s:string) => Cellerface

let PARSE_TYPE_FUNC:Map<string, parseFunc> = new Map([
    // ["INT", IntCell],
    // ["STR", null],
    // ["ARR", null],
    // ["MAP", null],
    // ["FLT", null],
])

class Header {
    name:string = ""
    type:string = ""
    ignore:boolean = false
}

function ParseTitle(row:string):Header[] {
    let titles:Header[] = [] 
    let cols = row.split(CELL_SEPERATOR)
    for (const col of cols) {
        let colHeadInfos = col.split('_')
        if (colHeadInfos.length < 3) {
            throw "column info error"
        }
        let useBy = colHeadInfos[0]
        let type = colHeadInfos[1]
        
        if (!USE_BY.has(useBy))
        {
            throw `column use by error`
        }
        if(!PARSE_TYPE_FUNC.has(type))
        {
            throw `column type error ${type}`
        }
        let headName = col.substring(useBy.length + type.length + 2)
        console.log(`UseBy ${headName} ${type} ${useBy}`)
    }
    
    return titles
}


function Main(){
    let tsvDir = "D:\\snd1\\config\\tsv\\"
    let files = fs.readdirSync(tsvDir)
    for(const file of files) {
        console.log(file)
        
        let content = fs.readFileSync(tsvDir.concat(file), "utf-8")
        const lines = content.split(/\r?\n/); // \r 可能不存在
        
        let title:Header[] = [] // 是否可以不赋值
        
        for (const line of lines) {
            if (line.startsWith("##") || line.startsWith("@")) {
                continue
            }
            
            if (title.length < 1) {
                title = ParseTitle(line)
            }
            break
        }
        break
    }
}



Main()