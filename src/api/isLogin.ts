import request from "@/utils/request";

type Logindata = {
    access_token:string

}
export const isLogin =()=>{
return request<Logindata>({
    
})
}