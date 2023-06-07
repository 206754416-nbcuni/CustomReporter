

export const userValidator = user =>{
    const userRegex=/206720858/;
    const userRegex2=/206754416/;
    return userRegex.test(user) || userRegex2.test(user)
}

export const passwordValidator = password =>{
    const passwordRegex=/Sab123/;
    const passwordRegex2=/Pra123/;
    return passwordRegex.test(password) || passwordRegex2.test(password)
}