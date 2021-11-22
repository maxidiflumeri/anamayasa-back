import request from 'supertest'
import app from '../index'
import axios from 'axios'

const data = {
    correo: 'maxidiflumeri@gmail.com',
    password: 'Maxi1988'
}

const obtenerToken = async ()=>{
    let respRet = ''
    try{
        const response = await axios.post('http://localhost:5000/api/usuarios/login', data)   
        respRet = response.data.tokenReturn
    }catch(error){
        console.log(error)
        respRet = 'error'
    }
    return respRet
}

const apiDeudoresTestGet = describe("GET /api/deudores/consultar", async () => {
    let token = await obtenerToken()
    it("probando api deudores get sin token error", done => {
        request(app)
            .get('/api/deudores/consultar')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done)
    })
    it("probando api usuarios get con token success", done => {
        request(app)
            .get('/api/usuarios/consultar')
            .set('Accept', 'application/json')
            .set('token', token)
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

export default {apiDeudoresTestGet}