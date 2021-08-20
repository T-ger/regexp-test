const str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// the 모두 찾는데 g는 모두 i는 소/대문자 구분 없이

// const regexp = new RegExp('the', 'gi') 
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /HEROPY/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))


// console.log(str.match(/\.$/gim))

// console.log(
    // str.match(/d$/gm)
    // str.match(/^t/gim)
// )

// console.log(
//     // str.match(/h..p/gi)
//     // str.match(/fox|dog/gi)
//     str.match(/https?/g)
// )


// console.log(
//     // str.match(/d{2}/g)
//     // str.match(/d{2,}/g)
//     // str.match(/d{2,3}/g)
//     str.match(/\b\w{2,3}\b/g) // \w : 숫자를 포함한 영어 알파벳을 의미
// )


// console.log(
//     // str.match(/[fox]/g)
//     // str.match(/[0-9]{1,}/g)
//     str.match(/[가-힣]{1,}/g)
// )

// const h = ` the hello world     !
// `
// console.log(
//     // str.match(/\bf\w{1,}\b/g)
//     // str.match(/\d{1,}/g)
//     // h.match(/\s/g)
//     h.replace(/\s/g, '')
// )



console.log(
    // str.match(/.{1,}(?=@)/g)
    // str.match(/(?<=@).{1,}/g)
)