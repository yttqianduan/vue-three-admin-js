// 校验规则文件

/**
 * 
 * @param {*} value //手机号
 * @returns 
 */
export function checkPhone(value){
    let regPhone = /^1[3456789]\d{9}$/;
    return regPhone.test(value)
}

/**
 * 密码验证
 */
export function checkPassword(value){
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value)
}

/**
 * 验证码验证
 */
export function checkCode(value){
    let regCode = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/;
    return regCode.test(value)
}