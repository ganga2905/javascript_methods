export const saveUser=(email,password)=>{
    const user={email,password}
    localStorage.setItem('user',JSON.stringify(user))

}

export const getUser=()=>{
    return JSON.parse(localStorage.getItem('user'))
}