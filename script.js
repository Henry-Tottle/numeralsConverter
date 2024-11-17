const numberBox = document.querySelector('#number')
const convertButton = document.querySelector('button')
const outputDiv = document.querySelector('#display')


const numeral = {'4' : ['M','MM','MMM'],
                            '3': ['C','CC','CCC','CD', 'D', 'DC', 'DCC', 'DCCC','CM'],
                            '2': ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
                            '1': ['I','II','III','IV','V','VI','VII','VIII','IX']}

const displayNumber = () => {
    const yourEntry = document.createElement('p')
    let value = (numberBox.value).toString()
    console.log(value.length)
    let conversionArray = []
    let outputArray = []
    let output
    const numeralConstructor = () => {
        let count = value.length
        conversionArray.forEach((digit) => {
            outputArray.push(numeral[(count).toString()][parseInt(digit) - 1])
            count--
    })
    }
    if(value.length > 1) {
        conversionArray = value.split('')
        numeralConstructor()
    } else {
        outputArray.push(numeral[value.length][parseInt(value) -1])
    }
    yourEntry.textContent = 'You input: ' + value + ' which is: ' + outputArray.join('') + ' in numerals'
    outputDiv.appendChild(yourEntry)
}



convertButton.addEventListener('click', displayNumber)