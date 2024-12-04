import {Router} from 'express'
import * as apiController from '../controllers/apiControllers'

const router = Router()

router.get('/ping',apiController.ping)

router.get('/random',apiController.random)

router.get('/nome/:nome',apiController.nome)

//criando endpoit frases
router.post('/frases',apiController.criarFrase)

router.get('/frases',apiController.listarFrase)

router.get('/frases/:id', apiController.pegarFrase)

//quando atualizamos Api usamos PUT
router.put('/frases/:id', apiController.editarFrase)
router.delete('/frases/:id', apiController.deletarFrase)

export default router