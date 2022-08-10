export const nameRules = () =>{
    const rules = []

    const rule1 =
    v => !!v || 'Name is required'

    const rule2 =
    v =>(v || '').length>= 2 ||
        'A name should have more than 2 characters'

    const rule3 =
    v => /^[a-žA-Ž]+$/.test(v) || 'Name should only have letters'

    const rule4 =
    v => (v || '').indexOf(' ') < 0 ||
        'No spaces are allowed'

    rules.push(rule1, rule2, rule3, rule4)

    return rules
}
export const emailRules = () =>{
    const rules = []

    const rule1 =
    v => !!v || 'Email is required'

    const rule2 =
    v => (v || '').indexOf(' ') < 0 ||
        'No spaces are allowed'

    const rule3 =
    v => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || 'Email format is invalid'

    rules.push(rule1, rule2, rule3)

    return rules
}
export const passwordRules = () =>{
    const rules = []

    const rule1 =
    v => !!v || 'Password is required'

    const rule2 =
    v => (v || '').length>= 8 ||
        'A password should be more than 8 characters long'
    
    const rule3 =
    v => (v || '').indexOf(' ') < 0 ||
        'No spaces are allowed'

    const rule5 =
    v => /(?=.*[a-z])/.test(v) || 'Password should contain small letters'

    const rule4 =
    v => /(?=.*\d)/.test(v) || 'Password should contain digits'

    const rule6 =
    v => /(?=.*[A-Z])/.test(v) || 'Password should contain Big letters'

    const rule7 =
    v => /(?=.*[!@#$%^&*])/.test(v) || 'Password should contain special characters'

    const rule8 =
    v => /(?!.*[\n])/.test(v) || 'Password should not contain newline characters'

    rules.push(rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8)

    return rules
}
export const phoneRules = () =>{
    const rules = []

    const rule1 =
    v => !!v || 'Phone is required'

    const rule2 =
    v => (v || '').indexOf(' ') < 0 ||
        'No spaces are allowed'

    const rule3 =
    v => (v || '').length == 10 ||
        'Phone should have 10 numbers exactly'

    const rule4 =
    v => /^[0-9]+$/.test(v) || 'Phone should only have digits'

    rules.push(rule1, rule2, rule3, rule4)

    return rules
}
export const addressRules = () =>{
    const rules = []

    const rule1 =
    v => !!v || 'Address is required'

    const rule2 =
    v => (v || '').length>= 5 ||
        'Address should have more than 5 characters'

    const rule3 =
    v => /^[a-žA-Ž]+[\s]*[0-9]+$/.test(v) || 'Address should have name of the street and digits at the end'

    rules.push(rule1, rule2, rule3)

    return rules
}