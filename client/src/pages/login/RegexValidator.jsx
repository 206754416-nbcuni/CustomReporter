

export const userValidator = user =>{
    const userRegex=/206720858/;
    return userRegex.test(user)
}

export const passwordValidator = password =>{
    const passwordRegex=/Sab123/;
    return passwordRegex.test(password)
}