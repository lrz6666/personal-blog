import request from "@/utils/request";
//用户登录参数类型
type LoginInfo = {
    phone:string
    code?:string
    password:string
}

//用户登录 返回结果类型

type LoginResult = {
    success:boolean
    state:number
    message:string
    content:{
        access_token: string;
        expires_in: number;
        refresh_token: string;
    }
    userName:string
}
type verifyTokenInfo ={
    accessToken:string
}
//用户登录请求

export const login = (loginInfo:LoginInfo) =>{
    
return request<LoginResult>({
    method:"post",
    url:"login",
    data:{
        phone: loginInfo.phone,
        password: loginInfo.password,
    }
})
}

export const verifyToken =(verifyTokenInfo:verifyTokenInfo)=>{
    return request({
    method:"get",
    url:"verify-token",
    params:{
        accessToken:verifyTokenInfo.accessToken
    }      
})
}