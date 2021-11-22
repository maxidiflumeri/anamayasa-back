import request from 'supertest'
import app from '../index'

let token = ''

const apiLoginTest = describe("POST /api/usuario/login", () => {
    const userLogin = {
        correo: 'maxidiflumeri@gmail.com',
        password: 'Maxi1988'
    }
    it("probando api login success", done => {
        request(app)
            .post('/api/usuarios/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send(userLogin)
            .expect(200)
            .end((err, response) => {
                token = response.body.tokenReturn
                done()
            })
    })

    it("probando api login invalid password", done => {
        request(app)
            .post('/api/usuarios/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send({ correo: 'maxidiflumeri@gmail.com', password: 'pepe' })
            .expect(404)
            .expect({ mensaje: 'Password incorrecto.' })
            .end((err) => {
                if (err) {
                    return done(err)
                } else {
                    done()
                }
            })
    })

    it("probando api login user not found", done => {
        request(app)
            .post('/api/usuarios/login')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send({ correo: 'pepe@pepe.com', password: 'pepe' })
            .expect(404)
            .expect({ mensaje: 'No existe el usuario.' })
            .end((err) => {
                if (err) {
                    return done(err)
                } else {
                    done()
                }
            })
    })
})


const apiUsuariosTest = describe("GET /api/usuarios/consultar", () => {
    it("probando api usuarios get sin token error", done => {
        request(app)
            .get('/api/usuarios/consultar')
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

export default {apiLoginTest, apiUsuariosTest}