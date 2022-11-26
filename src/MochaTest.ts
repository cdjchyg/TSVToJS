
export class Test{
    public GetSum(args:Array<number>):number{
            let sum = 0 // let 声明的变量只在作用域范围内有效， var 声明的全局有效
            for(const i in args){
                sum += args[i]
            }
            
            return sum
    }
}