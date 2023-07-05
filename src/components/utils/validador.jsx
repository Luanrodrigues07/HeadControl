const emailValidation = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.')
}

const passwordValidation = (password) => {
    return password?.toString().length > 8 
}

export {
    emailValidation,
    passwordValidation,
}