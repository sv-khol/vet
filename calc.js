document.forms['inject'].onsubmit = function (event) {
    event.preventDefault()
    console.log('calc')
    let
        prep_name = this.querySelector('.prep_name'),
        prep_doz = this.querySelector('.prep_doz'),
        prep_izm = this.querySelector('.prep_izm'),
        animal_weight = this.querySelector('.animal_weight'),
        animal_doz = this.querySelector('.animal_doz'),
        animal_doz_izm = this.querySelector('.animal_doz_izm');

    console.log('prep_name: ', prep_name.value)
    console.log('prep_doz: ', prep_doz.value)
    console.log('prep_izm: ', prep_izm.value)
    console.log('animal_weight: ', animal_weight.value)
    console.log('animal_doz: ', animal_doz.value)
    console.log('animal_doz_izm: ', animal_doz_izm.value)

    let col = Number(animal_weight.value) * Number(animal_doz.value)
    console.log('col: ', col, animal_doz_izm.value)

    let k = 1
    if ((prep_izm.value == "mg_ml") && (animal_doz_izm.value == "mkg")) {
        k = 1000
        console.log('1000')
    }
    if ((prep_izm.value == "mkg_ml") && (animal_doz_izm.value == "mg")) {
        k = 0.001
        console.log('0.001')
    }

    let final = col / (Number(prep_doz.value) * k)

    let rez = this.querySelector('.rez')
    rez.innerHTML = `для однократного введения надо набрать ${final.toFixed(2)} мл препарата ${prep_name.value}`

}

document.forms['infuzo'].onsubmit = function (event) {
    event.preventDefault()
    console.log('calc')
    let
        prep_name = this.querySelector('.prep_name'),
        prep_doz = this.querySelector('.prep_doz'),
        prep_izm = this.querySelector('.prep_izm'),
        animal_weight = this.querySelector('.animal_weight'),
        animal_doz = this.querySelector('.animal_doz'),
        animal_doz_izm = this.querySelector('.animal_doz_izm'),
        in_time = this.querySelector('.in_time'),
        period = this.querySelector('.period');

    console.log('prep_name: ', prep_name.value)
    console.log('prep_doz: ', prep_doz.value)
    console.log('prep_izm: ', prep_izm.value)
    console.log('animal_weight: ', animal_weight.value)
    console.log('animal_doz: ', animal_doz.value)
    console.log('animal_doz_izm: ', animal_doz_izm.value)
    console.log('in_time: ', in_time.value)
    console.log('period: ', period.value)

    let col = Number(animal_weight.value) * Number(animal_doz.value) * Number(in_time.value) * Number(period.value)
    console.log('col: ', col, animal_doz_izm.value)

    let k = 1
    if ((prep_izm.value == "mg_ml") && (animal_doz_izm.value == "mkg")) {
        k = 1000
        console.log('1000')
    }
    if ((prep_izm.value == "mkg_ml") && (animal_doz_izm.value == "mg")) {
        k = 0.001
        console.log('0.001')
    }

    let final = col / (Number(prep_doz.value) * k)

    let rez = this.querySelector('.rez')
    rez.innerHTML = `для введения препарата ${prep_name.value} в течение ${period.value} часов надо набрать ${final.toFixed(2)} мл `
}

document.forms['razved'].onsubmit = function (event) {
    event.preventDefault()
    console.log('calc')
    let
        prep_name = this.querySelector('.prep_name'),
        prep_doz = this.querySelector('.prep_doz'),
        prep_izm = this.querySelector('.prep_izm'),
        fluid = this.querySelector('.fluid'),
        animal_weight = this.querySelector('.animal_weight'),
        animal_doz = this.querySelector('.animal_doz'),
        animal_doz_izm = this.querySelector('.animal_doz_izm');

    console.log('prep_name: ', prep_name.value)
    console.log('prep_doz: ', prep_doz.value)
    console.log('prep_izm: ', prep_izm.value)
    console.log('prep_izm: ', fluid.value)
    console.log('animal_weight: ', animal_weight.value)
    console.log('animal_doz: ', animal_doz.value)
    console.log('animal_doz_izm: ', animal_doz_izm.value)

    let col = Number(animal_weight.value) * Number(animal_doz.value)
    console.log('col: ', col, animal_doz_izm.value)

    let k = 1
    if ((prep_izm.value == "gr") && (animal_doz_izm.value == "mg")) {
        k = 1000
        console.log('1000')
    }
    if ((prep_izm.value == "gr") && (animal_doz_izm.value == "mkg")) {
        k = 0.001
        console.log('1000000')
    }

    let final = col / (Number(prep_doz.value) * k / Number(fluid.value))

    let rez = this.querySelector('.rez')
    rez.innerHTML = `для однократного введения надо набрать ${final.toFixed(2)} мл препарата ${prep_name.value}`

}