class Lingkaran{
    constructor(pi, r ){
        this.jari_jari = r
        this.pi = pi
    }

    luas = () => {
        return this.pi * (this.jari_jari**2)
    }

    keliling = () => {
        return 2 * this.pi * this.jari_jari
    }
}

class Tabung extends Lingkaran{
    constructor(pi, r, t){
        super(pi, r)
        this.tinggi = t
    }

    volume = () => {
        return this.pi * (this.jari_jari**2) * this.tinggi
    }

    luasPermukaan = () =>{
        return this.pi * this.jari_jari * (this.jari_jari * 2 * this.tinggi)
    }

    luasSelimut = () => {
        return 2 * this.pi * this.jari_jari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(pi, r, t){
        super (pi, r)
        this.tinggi = t
    }

    volume = () =>{
        return (1/3) * this.pi * (this.jari_jari**2) * this.tinggi
    }

    luasPermukaan = () =>{
        return this.pi * this.jari_jari * (this.jari_jari + (Math.sqrt((this.jari_jari**2) + (this.tinggi**2))))
    }

    luasSelimut = () =>{
        return this.pi * this.jari_jari * (Math.sqrt((this.jari_jari**2) + (this.tinggi**2)))
    }
}

class Bola extends Lingkaran{
    constructor(pi, r){
        super (pi, r)  
    }

    volume = () =>{
        return (4/3) * this.pi * (this.jari_jari**3)
    }

    luasPermukaan = () =>{
        return 4 * this.pi * (this.jari_jari**2)
    }
}



let gelas = new Tabung(3.14, 7.5, 50)
console.log("------------------------GELAS-------------------------")
console.log("Jari - jari    = 7,5 cm")
console.log("Tinggi         = 50 cm")
console.log("Volume Gelas                = " + gelas.volume() + " cm3")
console.log("Luas Permukaan Gelas        = " + gelas.luasPermukaan() + " cm2");
console.log("Luas Selimut gelas          = " + gelas.luasSelimut() + " cm2");
console.log("------------------------------------------------------")
console.log(" ")

let cone = new Kerucut (3.14, 10, 40)
console.log("------------------------CONE-------------------------")
console.log("Jari - jari    = 10 cm")
console.log("Tinggi         = 40 cm")
console.log("Volume Trrafic Cone         = " + cone.volume() + " cm3");
console.log("Luas Permukaan Cone = " + cone.luasPermukaan() + " cm2");
console.log("Luas Selimt Cone    = " + cone.luasSelimut() + " cm2");
console.log("------------------------------------------------------")
console.log(" ")


let bola = new Bola (3.14, 15)
console.log("------------------------BOLA-------------------------")
console.log("Jari - jari    = 15 cm")
console.log("Volume Bola                 = " + bola.volume() + " cm3");
console.log("Luas Permukaan Bola         = " + bola.luasPermukaan() + " cm2");
console.log("------------------------------------------------------")