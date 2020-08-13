class Database {
    constructor(a, b, c, d){
        this.nama = a
        this.usia = b
        this.gender = c
        this.pekerjaan = d
    }
}

var data = [
    new Database('Bibi', 25, 'Pria', 'Creative'),
    new Database('Hana', 23, 'Wanita', 'Developer'),
    new Database('Yongie', 29, 'Pria', 'Singer'),
    new Database('Monica', 4, 'Wanita', 'Bocil')
]

const tampilkanData=()=>{
    var newData = data.map((val, index)=>{
        return `                
                <tr>
                    <td>${index+1}</td>
                    <td>${val.nama}</td>
                    <td>${val.usia}</td>
                    <td>${val.gender}</td>
                    <td>${val.pekerjaan}</td>
                </tr>`
    }).join('')
    document.getElementById('content').innerHTML = newData
}

tampilkanData()

const onSubmitClick=()=>{
    var nama = document.getElementById('name').value
    var usia = document.getElementById('usia').value
    var genderHTML = document.getElementsByName('gender')
    var gender
    if (genderHTML[0].checked){
        gender = genderHTML[0].value
    }else{
        gender = genderHTML[1].value
    }
    var pekerjaan = document.getElementById('pekerjaan').value

    data.push(new Database(nama, usia, gender, pekerjaan))
    tampilkanData()
    document.getElementById('name').value = ''
    document.getElementById('usia').value = ''
    document.getElementById('pekerjaan').value = ''
}

const sortir=(props)=>{
    for(i=data.length-1; i>0; i--){
        for(j=0; j<i; j++){
            if(data[j][props] > data[j+1][props]){
                const temp = data[j]
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    tampilkanData()
}

const onNamaClick=()=>{
    sortir('nama')
}

const onUsiaClick=()=>{
    sortir('usia')
}

const onGenderClick=()=>{
    sortir('gender')
}

const onPekerjaanClick=()=>{
    sortir('pekerjaan')
}