//  =============================================================
//  BRAINROTS DA FÉ  —  Leviatan Studios
//  Jogo para MakeCode Arcade (compatível com o editor de Blocos)
//  Cole este código na aba JavaScript e depois clique em Blocos
//  =============================================================
namespace SpriteKind {
    export const Duvida = SpriteKind.create()
    export const Coletavel = SpriteKind.create()
    export const Chefe = SpriteKind.create()
    export const Pomba = SpriteKind.create()
    export const Vida = SpriteKind.create()
    export const Cenario = SpriteKind.create()
    export const Alvo = SpriteKind.create()
    export const Seguidor = SpriteKind.create()
    export const Barra = SpriteKind.create()
    export const Semente = SpriteKind.create()
    export const Passaro = SpriteKind.create()
    export const Aviso = SpriteKind.create()
    export const Muro = SpriteKind.create()
    export const Perigo = SpriteKind.create()
    export const Animal = SpriteKind.create()
    export const Destino = SpriteKind.create()
    export const Poco = SpriteKind.create()
    export const Viajante = SpriteKind.create()
}

//  ------------------------------------------------------------
//  FUNÇÕES GERAIS
//  ------------------------------------------------------------
function ehChefe(numeroFase: number) {
    return numeroFase == 5 || numeroFase == 10 || numeroFase == 15 || numeroFase == 16
}

function limparTudo() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Duvida)
    sprites.destroyAllSpritesOfKind(SpriteKind.Coletavel)
    sprites.destroyAllSpritesOfKind(SpriteKind.Chefe)
    sprites.destroyAllSpritesOfKind(SpriteKind.Pomba)
    sprites.destroyAllSpritesOfKind(SpriteKind.Vida)
    sprites.destroyAllSpritesOfKind(SpriteKind.Cenario)
    sprites.destroyAllSpritesOfKind(SpriteKind.Alvo)
    sprites.destroyAllSpritesOfKind(SpriteKind.Seguidor)
    sprites.destroyAllSpritesOfKind(SpriteKind.Barra)
    sprites.destroyAllSpritesOfKind(SpriteKind.Semente)
    sprites.destroyAllSpritesOfKind(SpriteKind.Passaro)
    sprites.destroyAllSpritesOfKind(SpriteKind.Aviso)
    sprites.destroyAllSpritesOfKind(SpriteKind.Muro)
    sprites.destroyAllSpritesOfKind(SpriteKind.Perigo)
    sprites.destroyAllSpritesOfKind(SpriteKind.Animal)
    sprites.destroyAllSpritesOfKind(SpriteKind.Destino)
    sprites.destroyAllSpritesOfKind(SpriteKind.Poco)
    sprites.destroyAllSpritesOfKind(SpriteKind.Viajante)
    info.stopCountdown()
    effects.starField.endScreenEffect()
}

function desenharSol() {
    fundo.fillRect(126, 10, 20, 20, 5)
    fundo.fillRect(122, 14, 28, 12, 5)
    fundo.fillRect(130, 6, 12, 28, 5)
    fundo.fillRect(130, 14, 12, 12, 4)
}

function desenharFundo(ceu: number, faixa: number, chao: number, decoracao: number) {
    
    fundo = image.create(160, 120)
    fundo.fill(ceu)
    fundo.fillRect(0, 70, 160, 12, faixa)
    fundo.fillRect(0, 82, 160, 38, chao)
    if (decoracao == 1) {
        desenharSol()
    } else if (decoracao == 2) {
        for (let indiceEstrela = 0; indiceEstrela < 70; indiceEstrela++) {
            if (Math.percentChance(50)) {
                fundo.setPixel(randint(0, 159), randint(0, 68), 1)
            } else {
                fundo.setPixel(randint(0, 159), randint(0, 68), 5)
            }
            
        }
        fundo.fillRect(130, 12, 12, 12, 1)
        fundo.fillRect(135, 10, 10, 11, ceu)
    } else if (decoracao == 3) {
        for (let linhaOnda = 0; linhaOnda < 5; linhaOnda++) {
            for (let colunaOnda = 0; colunaOnda < 10; colunaOnda++) {
                fundo.fillRect(colunaOnda * 16 + linhaOnda % 2 * 8, 86 + linhaOnda * 7, 6, 1, 9)
            }
        }
    } else if (decoracao == 4) {
        for (let indiceDuna = 0; indiceDuna < 5; indiceDuna++) {
            fundo.fillRect(indiceDuna * 34, 64 + indiceDuna % 2 * 3, 28, 8, 4)
        }
        desenharSol()
    } else if (decoracao == 5) {
        for (let indiceFlor = 0; indiceFlor < 40; indiceFlor++) {
            posX = randint(2, 157)
            posY = randint(86, 116)
            if (Math.percentChance(50)) {
                fundo.setPixel(posX, posY, 3)
            } else {
                fundo.setPixel(posX, posY, 5)
            }
            
            fundo.setPixel(posX, posY + 1, 6)
        }
        desenharSol()
    } else if (decoracao == 6) {
        for (let indiceNuvem = 0; indiceNuvem < 5; indiceNuvem++) {
            posX = randint(0, 136)
            posY = randint(10, 50)
            fundo.fillRect(posX, posY, 24, 6, 1)
            fundo.fillRect(posX + 5, posY - 4, 12, 5, 1)
        }
    } else if (decoracao == 7) {
        for (let indiceTorre = 0; indiceTorre < 4; indiceTorre++) {
            fundo.fillRect(10 + indiceTorre * 40, 36, 22, 34, 13)
            fundo.fillRect(10 + indiceTorre * 40, 31, 6, 5, 13)
            fundo.fillRect(18 + indiceTorre * 40, 31, 6, 5, 13)
            fundo.fillRect(26 + indiceTorre * 40, 31, 6, 5, 13)
            fundo.fillRect(18 + indiceTorre * 40, 50, 6, 10, 14)
        }
    } else if (decoracao == 8) {
        for (let indiceSulco = 0; indiceSulco < 6; indiceSulco++) {
            fundo.fillRect(0, 86 + indiceSulco * 6, 160, 2, 12)
        }
        desenharSol()
    }
    
    scene.setBackgroundImage(fundo)
}

function prepararCenario() {
    if (fase == 1) {
        desenharFundo(9, 4, 5, 1)
    } else if (fase == 2) {
        desenharFundo(9, 6, 8, 3)
    } else if (fase == 3) {
        desenharFundo(9, 8, 8, 3)
    } else if (fase == 4) {
        desenharFundo(9, 7, 7, 6)
    } else if (fase == 5) {
        desenharFundo(10, 12, 12, 6)
    } else if (fase == 6) {
        desenharFundo(12, 14, 13, 2)
    } else if (fase == 7) {
        desenharFundo(4, 14, 13, 1)
    } else if (fase == 8) {
        desenharFundo(9, 4, 13, 4)
    } else if (fase == 9) {
        desenharFundo(9, 7, 7, 5)
    } else if (fase == 10) {
        desenharFundo(3, 14, 4, 7)
    } else if (fase == 11) {
        desenharFundo(12, 11, 8, 3)
    } else if (fase == 12) {
        desenharFundo(9, 1, 9, 6)
    } else if (fase == 13) {
        desenharFundo(4, 13, 13, 4)
    } else if (fase == 14) {
        desenharFundo(9, 14, 14, 8)
    } else if (fase == 15) {
        desenharFundo(10, 6, 7, 2)
    } else {
        desenharFundo(15, 12, 12, 2)
    }
    
    if (fase == 6 || fase == 15 || fase == 16) {
        effects.starField.startScreenEffect()
    }
    
}

function tocarMusica(numeroMusica: number) {
    music.stopAllSounds()
    if (numeroMusica == 0) {
        music.play(music.stringPlayable("C5 G E G A G E C ", 120), music.PlaybackMode.LoopingInBackground)
    } else if (numeroMusica == 1) {
        music.play(music.stringPlayable("E G A G C5 A G E ", 150), music.PlaybackMode.LoopingInBackground)
    } else if (numeroMusica == 2) {
        music.play(music.stringPlayable("G A B C5 B A G E ", 160), music.PlaybackMode.LoopingInBackground)
    } else if (numeroMusica == 3) {
        music.play(music.stringPlayable("C E G C5 G E D F ", 190), music.PlaybackMode.LoopingInBackground)
    } else if (numeroMusica == 4) {
        music.play(music.stringPlayable("C D E - E F G - ", 100), music.PlaybackMode.LoopingInBackground)
    } else {
        music.play(music.stringPlayable("G E C E G C5 B C5 ", 110), music.PlaybackMode.LoopingInBackground)
    }
    
}

//  ------------------------------------------------------------
//  JOGADOR
//  ------------------------------------------------------------
function criarJogador() {
    
    jogador = sprites.create(imgHeroi, SpriteKind.Player)
    jogador.setPosition(80, 96)
    jogador.setStayInScreen(true)
    jogador.z = 10
    controller.moveSprite(jogador, velocidade, velocidade)
    dirX = 1
    dirY = 0
}

function atirar() {
    
    if (game.runtime() - ultimoTiro >= cadencia) {
        ultimoTiro = game.runtime()
        velTiroX = dirX * 150
        velTiroY = dirY * 150
        if (ehChefe(fase)) {
            distX = chefe.x - jogador.x
            distY = chefe.y - jogador.y
            distancia = Math.sqrt(distX * distX + distY * distY)
            if (distancia > 0) {
                velTiroX = distX / distancia * 150
                velTiroY = distY / distancia * 150
            }
            
        }
        
        if (velTiroX == 0 && velTiroY == 0) {
            velTiroX = 150
        }
        
        tiro = sprites.createProjectileFromSprite(imgCoracao, jogador, velTiroX, velTiroY)
        if (personagem == 0) {
            tiro.scale = 1.5
        }
        
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
    
}

function plantarSemente() {
    
    if (sprites.allOfKind(SpriteKind.Semente).length < 10 && game.runtime() - ultimoTiro >= 400) {
        ultimoTiro = game.runtime()
        novaSemente = sprites.create(imgSemente, SpriteKind.Semente)
        novaSemente.setPosition(jogador.x, jogador.y + 8)
        novaSemente.z = 1
        novaSemente.lifespan = 5000
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    }
    
}

function tomarDano() {
    
    if (estado == 1 && game.runtime() >= fimInvencivel) {
        fimInvencivel = game.runtime() + 1500
        info.changeLifeBy(-1)
        scene.cameraShake(3, 300)
        jogador.sayText("Opa!", 500, false)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
        if (ehChefe(fase)) {
            pisoAmor = Math.idiv(amorMax * (etapaChefe - 1), 3)
            amor = Math.max(pisoAmor, amor - 5)
            atualizarBarra()
        }
        
    }
    
}

function virarPomba(alvoPomba: Sprite) {
    
    pomba = sprites.create(imgPomba, SpriteKind.Pomba)
    pomba.setPosition(alvoPomba.x, alvoPomba.y)
    pomba.setVelocity(randint(-25, 25), -60)
    pomba.lifespan = 2500
    alvoPomba.destroy()
}

//  ------------------------------------------------------------
//  CRIADORES DE OBJETOS
//  ------------------------------------------------------------
function criarColetavel(imagemItem: Image, x: number, y: number, vx: number, vy: number): Sprite {
    
    item = sprites.create(imagemItem, SpriteKind.Coletavel)
    item.setPosition(x, y)
    item.setVelocity(vx, vy)
    if (vx != 0 || vy != 0) {
        item.setFlag(SpriteFlag.AutoDestroy, true)
    }
    
    return item
}

function criarPerigo(imagemPerigo: Image, x2: number, y2: number, vx2: number, vy2: number): Sprite {
    
    perigo = sprites.create(imagemPerigo, SpriteKind.Perigo)
    perigo.setPosition(x2, y2)
    perigo.setVelocity(vx2, vy2)
    if (vx2 != 0 || vy2 != 0) {
        perigo.setFlag(SpriteFlag.AutoDestroy, true)
    }
    
    return perigo
}

function criarDuvidaLateral(velocidadeNuvem: number) {
    
    nuvem = sprites.create(imgDuvida, SpriteKind.Duvida)
    if (Math.percentChance(50)) {
        nuvem.setPosition(0, randint(24, 110))
        nuvem.vx = velocidadeNuvem
    } else {
        nuvem.setPosition(160, randint(24, 110))
        nuvem.vx = 0 - velocidadeNuvem
    }
    
    nuvem.vy = randint(-10, 10)
    nuvem.setFlag(SpriteFlag.AutoDestroy, true)
}

function criarDuvidaQuicando(imagemQuica: Image, velocidadeQuica: number) {
    
    nuvem = sprites.create(imagemQuica, SpriteKind.Duvida)
    nuvem.setPosition(randint(10, 150), 10)
    if (Math.abs(nuvem.x - jogador.x) < 30) {
        nuvem.x = 160 - nuvem.x
    }
    
    nuvem.setVelocity(randint(0 - velocidadeQuica, velocidadeQuica), randint(Math.idiv(velocidadeQuica, 2), velocidadeQuica))
    nuvem.setBounceOnWall(true)
}

function lancarDuvida(imagemLancada: Image, x3: number, y3: number, vx3: number, vy3: number) {
    
    nuvem = sprites.create(imagemLancada, SpriteKind.Duvida)
    nuvem.setPosition(x3, y3)
    nuvem.setVelocity(vx3, vy3)
    nuvem.setFlag(SpriteFlag.AutoDestroy, true)
}

function criarVida() {
    
    coracaoExtra = sprites.create(imgVida, SpriteKind.Vida)
    coracaoExtra.setPosition(randint(20, 140), randint(30, 100))
    coracaoExtra.lifespan = 8000
    coracaoExtra.startEffect(effects.halo, 8000)
}

function criarAnimal(imagemAnimal: Image, x4: number, y4: number) {
    
    alvo = sprites.create(imagemAnimal, SpriteKind.Animal)
    alvo.setPosition(x4, y4)
    alvo.setVelocity(randint(-20, 20), randint(-20, 20))
    alvo.setBounceOnWall(true)
}

function criarEstrela() {
    
    item = criarColetavel(imgEstrela, randint(15, 145), randint(22, 110), 0, 0)
    item.startEffect(effects.halo, 1500)
}

function construirMuros() {
    
    for (let indiceMuro = 0; indiceMuro < 10; indiceMuro++) {
        tijolo = sprites.create(imgMuro, SpriteKind.Muro)
        tijolo.setPosition(8 + indiceMuro * 16, 22)
        tijolo.z = -1
    }
}

function derrubarMuro() {
    
    listaMuros = sprites.allOfKind(SpriteKind.Muro)
    if (listaMuros.length > 0) {
        tijolo = listaMuros[randint(0, listaMuros.length - 1)]
        tijolo.setKind(SpriteKind.Cenario)
        tijolo.vy = 70
        tijolo.setFlag(SpriteFlag.AutoDestroy, true)
        scene.cameraShake(2, 200)
    }
    
    if (sprites.allOfKind(SpriteKind.Muro).length == 0 && horaReconstruir == 0) {
        info.changeScoreBy(50)
        jogador.sayText("As muralhas caíram!", 1500, false)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        horaReconstruir = game.runtime() + 3000
    }
    
}

function posicionarEspinhos() {
    
    sprites.destroyAllSpritesOfKind(SpriteKind.Perigo)
    for (let indiceEspinho = 0; indiceEspinho < 4; indiceEspinho++) {
        if (Math.percentChance(50)) {
            posX = randint(18, 48)
        } else {
            posX = randint(112, 142)
        }
        
        posY = randint(22, 106)
        if (Math.abs(posX - jogador.x) < 20 && Math.abs(posY - jogador.y) < 20) {
            posY = 120 - posY
        }
        
        criarPerigo(imgEspinho, posX, posY, 0, 0)
    }
}

//  ------------------------------------------------------------
//  FASES
//  ------------------------------------------------------------
function montarFase() {
    
    if (fase == 4) {
        alvo = sprites.create(imgArca, SpriteKind.Destino)
        alvo.setPosition(22, 64)
    } else if (fase == 5) {
        criarChefe(imgGigante, 300)
    } else if (fase == 6) {
        criarEstrela()
    } else if (fase == 7) {
        horaReconstruir = 0
        construirMuros()
    } else if (fase == 9) {
        alvo = sprites.create(imgCercado, SpriteKind.Destino)
        alvo.setPosition(80, 64)
        posicionarEspinhos()
    } else if (fase == 10) {
        criarChefe(imgRei, 330)
    } else if (fase == 13) {
        alvo = sprites.create(imgPoco, SpriteKind.Poco)
        alvo.setPosition(20, 64)
    } else if (fase == 15) {
        criarChefe(imgDragao, 360)
    } else if (fase == 16) {
        criarChefe(imgNuvemFinal, 420)
    }
    
}

function logicaFaseNormal() {
    
    if (fase == 1) {
        if (tick % 3 == 0) {
            criarColetavel(imgPao, randint(10, 150), 0, 0, randint(30, 45) + nivel * 5)
        }
        
        if (tick % Math.max(4, 12 - nivel * 2) == 0) {
            criarDuvidaLateral(40 + nivel * 8)
        }
        
    } else if (fase == 2) {
        if (tick % 4 == 0) {
            if (Math.percentChance(50)) {
                criarColetavel(imgPeixe, 0, randint(30, 110), 40 + nivel * 5, 0)
            } else {
                criarColetavel(imgPeixeEsq, 160, randint(30, 110), 0 - (40 + nivel * 5), 0)
            }
            
        }
        
        if (tick % 8 == 0 && sprites.allOfKind(SpriteKind.Duvida).length < 2 + nivel) {
            criarDuvidaQuicando(imgDuvida, 35 + nivel * 6)
        }
        
    } else if (fase == 3) {
        if (tick % 2 == 0) {
            enfeite = sprites.create(imgOnda, SpriteKind.Cenario)
            enfeite.setPosition(160, randint(20, 116))
            enfeite.vx = -50
            enfeite.z = -5
            enfeite.setFlag(SpriteFlag.AutoDestroy, true)
        }
        
        if (tick % Math.max(3, 8 - nivel) == 0) {
            criarPerigo(imgRocha, 160, randint(20, 112), 0 - (55 + nivel * 10), 0)
        }
        
        if (tick % 5 == 0) {
            criarColetavel(imgGota, 160, randint(20, 112), -50, 0)
        }
        
        if (tick % 20 == 0) {
            criarDuvidaLateral(45 + nivel * 5)
        }
        
    } else if (fase == 4) {
        if (tick % 10 == 0 && sprites.allOfKind(SpriteKind.Animal).length + sprites.allOfKind(SpriteKind.Seguidor).length < 4) {
            if (Math.percentChance(50)) {
                criarAnimal(imgOvelha, randint(100, 150), randint(25, 110))
            } else {
                criarAnimal(imgPato, randint(100, 150), randint(25, 110))
            }
            
        }
        
        if (tick % Math.max(5, 14 - nivel * 2) == 0) {
            criarDuvidaLateral(35 + nivel * 8)
        }
        
    } else if (fase == 6) {
        if (tick % 12 == 0 && sprites.allOfKind(SpriteKind.Duvida).length < 1 + nivel) {
            nuvem = sprites.create(imgDuvida, SpriteKind.Duvida)
            if (Math.percentChance(50)) {
                nuvem.setPosition(6, 6)
            } else {
                nuvem.setPosition(154, 6)
            }
            
            nuvem.follow(jogador, 20 + nivel * 6)
        }
        
    } else if (fase == 7) {
        if (tick % 6 == 0 && sprites.allOfKind(SpriteKind.Coletavel).length < 2) {
            item = criarColetavel(imgTrombeta, randint(15, 145), randint(45, 110), 0, 0)
            item.lifespan = 9000
        }
        
        if (tick % Math.max(4, 10 - nivel * 2) == 0) {
            if (Math.percentChance(50)) {
                criarPerigo(imgRocha, 0, randint(45, 112), 50 + nivel * 10, 0)
            } else {
                criarPerigo(imgRocha, 160, randint(45, 112), 0 - (50 + nivel * 10), 0)
            }
            
        }
        
        if (horaReconstruir > 0 && game.runtime() > horaReconstruir) {
            horaReconstruir = 0
            construirMuros()
        }
        
    } else if (fase == 8) {
        if (tick % 2 == 0) {
            criarColetavel(imgMana, randint(8, 152), 0, 0, randint(25, 40))
        }
        
        if (tick % 12 == 0) {
            criarColetavel(imgGota, randint(8, 152), 0, 0, 35)
        }
        
        if (tick % 10 == 0 && sprites.allOfKind(SpriteKind.Duvida).length < 2 + nivel) {
            criarDuvidaQuicando(imgTornado, 40 + nivel * 8)
        }
        
    } else if (fase == 9) {
        if (tick % 8 == 0 && sprites.allOfKind(SpriteKind.Animal).length + sprites.allOfKind(SpriteKind.Seguidor).length < 4) {
            if (Math.percentChance(50)) {
                criarAnimal(imgOvelha, 12, randint(25, 110))
            } else {
                criarAnimal(imgOvelha, 148, randint(25, 110))
            }
            
        }
        
        if (tick % 16 == 0 && sprites.allOfKind(SpriteKind.Duvida).length < 5 + Math.idiv(nivel, 2)) {
            criarDuvidaLateral(30 + nivel * 6)
        }
        
    } else if (fase == 11) {
        for (let indiceChuva = 0; indiceChuva < 3; indiceChuva++) {
            enfeite = sprites.create(imgChuva, SpriteKind.Cenario)
            enfeite.setPosition(randint(0, 170), 0)
            enfeite.setVelocity(-25, 160)
            enfeite.z = -5
            enfeite.setFlag(SpriteFlag.AutoDestroy, true)
        }
        if (tick % Math.max(2, 6 - nivel) == 0) {
            aviso = sprites.create(imgAviso, SpriteKind.Aviso)
            if (Math.percentChance(35)) {
                aviso.setPosition(jogador.x, jogador.y + 6)
            } else {
                aviso.setPosition(randint(10, 150), randint(25, 112))
            }
            
            aviso.lifespan = 900
            aviso.z = -1
        }
        
        if (tick % 6 == 0) {
            if (Math.percentChance(50)) {
                criarColetavel(imgPomba, 0, randint(30, 100), 30, 0)
            } else {
                criarColetavel(imgPomba, 160, randint(30, 100), -30, 0)
            }
            
        }
        
    } else if (fase == 12) {
        if (tick % 4 == 0) {
            enfeite = sprites.create(imgNuvemBranca, SpriteKind.Cenario)
            enfeite.setPosition(randint(0, 160), 0)
            enfeite.vy = 30
            enfeite.z = -5
            enfeite.setFlag(SpriteFlag.AutoDestroy, true)
        }
        
        if (tick % 3 == 0) {
            criarColetavel(imgNota, 160, randint(20, 110), -40, 0)
        }
        
        if (tick % Math.max(4, 10 - nivel) == 0) {
            nuvem = sprites.create(imgDuvida, SpriteKind.Duvida)
            nuvem.setPosition(160, randint(35, 95))
            nuvem.vx = 0 - (40 + nivel * 8)
            nuvem.setFlag(SpriteFlag.AutoDestroy, true)
        }
        
    } else if (fase == 13) {
        if (tick % 12 == 0 && sprites.allOfKind(SpriteKind.Viajante).length < 3) {
            alvo = sprites.create(imgViajante, SpriteKind.Viajante)
            alvo.setPosition(randint(60, 150), randint(22, 110))
            alvo.sayText("Tenho sede...", 2000, false)
        }
        
        if (tick % 10 == 0 && sprites.allOfKind(SpriteKind.Duvida).length < 2 + nivel) {
            criarDuvidaQuicando(imgDuvida, 35 + nivel * 6)
        }
        
    } else if (fase == 14) {
        if (tick % Math.max(6, 14 - nivel * 2) == 0) {
            posY = randint(30, 110)
            listaSementes = sprites.allOfKind(SpriteKind.Semente)
            if (listaSementes.length > 0) {
                posY = listaSementes[randint(0, listaSementes.length - 1)].y
            }
            
            if (Math.percentChance(50)) {
                passarinho = sprites.create(imgPassaro, SpriteKind.Passaro)
                passarinho.setPosition(0, posY)
                passarinho.vx = 40 + nivel * 5
            } else {
                passarinho = sprites.create(imgPassaroEsq, SpriteKind.Passaro)
                passarinho.setPosition(160, posY)
                passarinho.vx = 0 - (40 + nivel * 5)
            }
            
            passarinho.setFlag(SpriteFlag.AutoDestroy, true)
        }
        
        if (tick % 16 == 0 && sprites.allOfKind(SpriteKind.Duvida).length < 1 + Math.idiv(nivel, 2)) {
            criarDuvidaQuicando(imgDuvida, 30)
        }
        
    }
    
}

//  ------------------------------------------------------------
//  CHEFÕES
//  ------------------------------------------------------------
function criarChefe(imagemChefe: Image, maximo: number) {
    
    chefe = sprites.create(imagemChefe, SpriteKind.Chefe)
    chefe.setPosition(80, 32)
    chefe.setBounceOnWall(true)
    chefe.setVelocity(35, 0)
    chefe.z = 5
    amor = 0
    amorMax = maximo
    escudo = false
    etapaChefe = 1
    barra = sprites.create(image.create(62, 7), SpriteKind.Barra)
    barra.setPosition(80, 113)
    barra.z = 50
    atualizarBarra()
}

function atualizarBarra() {
    
    barra.image.fill(15)
    barra.image.drawRect(0, 0, 62, 7, 1)
    larguraBarra = Math.min(58, Math.idiv(amor * 58, amorMax))
    barra.image.fillRect(2, 2, larguraBarra, 3, 2)
}

function imagemDoChefe(): Image {
    if (fase == 5) {
        return imgGigante
    } else if (fase == 10) {
        return imgRei
    } else if (fase == 15) {
        return imgDragao
    }
    
    return imgNuvemFinal
}

function nomeDoChefe(): string {
    if (fase == 5) {
        return "Gigante Resmungão"
    } else if (fase == 10) {
        return "Rei Orgulhoso"
    } else if (fase == 15) {
        return "Dragão Dorminhoco"
    }
    
    return "Nuvem da Dúvida"
}

function rajadaCircular(imagemRajada: Image, quantidade: number, velocidadeRajada: number) {
    
    let indiceRajada = 0
    while (indiceRajada <= quantidade - 1) {
        angulo = indiceRajada * 2 * Math.PI / quantidade + tick / 7
        lancarDuvida(imagemRajada, chefe.x, chefe.y, Math.cos(angulo) * velocidadeRajada, Math.sin(angulo) * velocidadeRajada)
        indiceRajada += 1
    }
}

function tiroMirado(imagemMira: Image, velocidadeMira: number) {
    
    distX = jogador.x - chefe.x
    distY = jogador.y - chefe.y
    distancia = Math.max(1, Math.sqrt(distX * distX + distY * distY))
    lancarDuvida(imagemMira, chefe.x, chefe.y, distX / distancia * velocidadeMira, distY / distancia * velocidadeMira)
}

function logicaChefe() {
    
    novaEtapa = 1
    if (amor * 3 >= amorMax * 2) {
        novaEtapa = 3
    } else if (amor * 3 >= amorMax) {
        novaEtapa = 2
    }
    
    if (novaEtapa > etapaChefe) {
        etapaChefe = novaEtapa
        if (etapaChefe == 2) {
            chefe.sayText("O que é isso no meu peito?!", 2000, false)
        } else {
            chefe.sayText("Não consigo resistir!", 2000, false)
        }
        
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        scene.cameraShake(3, 400)
    }
    
    if (escudo && game.runtime() > fimEscudo) {
        escudo = false
    }
    
    if (chefe.vx >= 0) {
        chefe.vx = 25 + etapaChefe * 12
    } else {
        chefe.vx = 0 - (25 + etapaChefe * 12)
    }
    
    if (fase == 5) {
        if (tick % (9 - etapaChefe * 2) == 0) {
            for (let lado = -1; lado < 2; lado++) {
                lancarDuvida(imgDuvida, chefe.x + lado * 12, chefe.y + 14, lado * 30, 45 + etapaChefe * 10)
            }
        }
        
    } else if (fase == 10) {
        if (tick % 12 == 0) {
            chefe.setPosition(randint(25, 135), randint(22, 50))
            chefe.startEffect(effects.halo, 300)
        }
        
        if (tick % (8 - etapaChefe) == 0) {
            rajadaCircular(imgCoroa, 4 + etapaChefe * 2, 45 + etapaChefe * 8)
        }
        
    } else if (fase == 15) {
        chefe.vx = chefe.vx / 2
        if (tick % (7 - etapaChefe) == 0) {
            lancarDuvida(imgZzz, chefe.x, chefe.y + 10, randint(-40, 40), 35 + etapaChefe * 8)
        }
        
        if (tick % 24 == 0) {
            chefe.sayText("Uaaaah!", 800, false)
            for (let leque = -3; leque < 4; leque++) {
                lancarDuvida(imgZzz, chefe.x, chefe.y + 10, leque * 18, 40)
            }
        }
        
    } else {
        padraoAtaque = Math.idiv(tick, 16) % 3
        if (padraoAtaque == 0 && tick % (6 - etapaChefe) == 0) {
            lancarDuvida(imgDuvida, randint(8, 152), 0, 0, 50 + etapaChefe * 12)
            lancarDuvida(imgDuvida, randint(8, 152), 0, 0, 50 + etapaChefe * 12)
        }
        
        if (padraoAtaque == 1 && tick % (5 - etapaChefe) == 0) {
            tiroMirado(imgDuvida, 55 + etapaChefe * 12)
        }
        
        if (padraoAtaque == 2 && tick % (8 - etapaChefe) == 0) {
            rajadaCircular(imgDuvida, 6 + etapaChefe * 2, 50 + etapaChefe * 10)
        }
        
    }
    
}

//  ------------------------------------------------------------
//  FLUXO DAS FASES
//  ------------------------------------------------------------
function iniciarFase() {
    
    estado = 2
    limparTudo()
    faseConcluida = false
    falhou = false
    tempoFase = 0
    tick = 0
    nivel = 0
    carregando = 0
    fimInvencivel = 0
    prepararCenario()
    criarJogador()
    controller.moveSprite(jogador, 0, 0)
    if (ehChefe(fase)) {
        game.splash("Fase " + ("" + fase) + " - CHEFÃO!", titulos[fase - 1])
    } else {
        game.splash("Fase " + ("" + fase), titulos[fase - 1])
    }
    
    game.showLongText(instrucoes[fase - 1], DialogLayout.Bottom)
    montarFase()
    if (ehChefe(fase)) {
        chefe.sayText("" + nomeDoChefe() + "!", 1500, false)
        tocarMusica(3)
    } else {
        info.startCountdown(DURACAO_FASE)
        tocarMusica(1 + fase % 2)
    }
    
    pause(300)
    controller.moveSprite(jogador, velocidade, velocidade)
    estado = 1
}

function comemorarFase() {
    info.stopCountdown()
    controller.moveSprite(jogador, 0, 0)
    jogador.setFlag(SpriteFlag.Invisible, false)
    for (let nuvemRestante of sprites.allOfKind(SpriteKind.Duvida)) {
        virarPomba(nuvemRestante)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Perigo)
    if (ehChefe(fase)) {
        chefe.setVelocity(0, 0)
        chefe.startEffect(effects.hearts, 2000)
        chefe.sayText("Que amor é esse?!", 2000, false)
    }
    
    jogador.startEffect(effects.smiles, 1500)
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    pause(1500)
    game.splash("Fase concluída!", "Pontos: " + ("" + info.score()))
}

//  ------------------------------------------------------------
//  CUTSCENES
//  ------------------------------------------------------------
function falar(quem: string, texto: string) {
    game.showLongText(quem + ": " + texto, DialogLayout.Bottom)
}

function montarCena() {
    
    limparTudo()
    prepararCenario()
    atorHeroi = sprites.create(imgHeroi, SpriteKind.Cenario)
    atorHeroi.setPosition(-10, 42)
    atorHeroi.scale = 2
    atorHeroi.vx = 60
    atorAnjo = sprites.create(imgAnjo, SpriteKind.Cenario)
    atorAnjo.setPosition(120, -20)
    atorAnjo.scale = 2
    atorAnjo.vy = 60
    atorAnjo.startEffect(effects.halo, 1500)
    pause(1000)
    atorHeroi.vx = 0
    atorAnjo.vy = 0
}

function cenaDepoisDaFase() {
    
    estado = 2
    tocarMusica(4)
    montarCena()
    if (ehChefe(fase)) {
        atorAnjo.scale = 1
        atorAnjo.setPosition(146, 16)
        atorExtra = sprites.create(imagemDoChefe(), SpriteKind.Cenario)
        atorExtra.setPosition(112, 46)
        atorExtra.startEffect(effects.hearts, 3000)
    }
    
    if (fase == 1) {
        falar("Anjo Gabriel", "Muito bem, " + nomeHeroi + "! Você juntou muitos pães!")
        falar(nomeHeroi, "Por que esses pães são tão importantes?")
        falar("Anjo Gabriel", "Jesus multiplicou cinco pães e dois peixes e alimentou mais de cinco mil pessoas! Ele cuida de quem tem fome.")
        falar(nomeHeroi, "Uau... eu nunca tinha ouvido falar de Jesus.")
        falar("Anjo Gabriel", "Então continue a jornada. Ele quer muito te conhecer!")
    } else if (fase == 2) {
        falar(nomeHeroi, "Pesquei tanto peixe que a rede quase rasgou!")
        falar("Anjo Gabriel", "Foi assim com Pedro! Ele pescou a noite toda e não pegou nada. Mas quando obedeceu a Jesus, a rede encheu!")
        falar(nomeHeroi, "Então obedecer a Jesus traz coisas boas?")
        falar("Anjo Gabriel", "Sempre! Ele sabe o que é melhor para nós.")
    } else if (fase == 3) {
        falar(nomeHeroi, "Eu andei sobre a água! Mas fiquei com medo das pedras...")
        falar("Anjo Gabriel", "Pedro também andou sobre as águas enquanto olhava para Jesus. Quando teve medo, Jesus estendeu a mão e o segurou.")
        falar(nomeHeroi, "Então quando eu tiver medo, posso olhar para Ele?")
        falar("Anjo Gabriel", "Isso mesmo! Ele nunca solta a sua mão.")
    } else if (fase == 4) {
        falar(nomeHeroi, "Todos os bichinhos entraram na arca!")
        falar("Anjo Gabriel", "Noé confiou em Deus e construiu a arca, mesmo quando ninguém acreditava nele.")
        falar("Anjo Gabriel", "Depois do dilúvio, uma pombinha voltou com um raminho de oliveira: era sinal de paz e de um novo começo!")
        falar(nomeHeroi, "Eu também quero um novo começo!")
    } else if (fase == 5) {
        falar("Gigante Resmungão", "Snif... ninguém nunca tinha jogado corações em mim. Eu só vivia resmungando...")
        falar(nomeHeroi, "Eu não quero brigar com você. Quero ser seu amigo!")
        falar("Anjo Gabriel", "Jesus ensinou a amar até quem é difícil de amar. O amor transforma corações!")
        falar("Gigante Resmungão", "Obrigado... acho que agora vou sorrir mais!")
    } else if (fase == 6) {
        falar(nomeHeroi, "Segui a estrela e ela me trouxe até aqui!")
        falar("Anjo Gabriel", "Os Reis Magos seguiram uma estrela assim e encontraram o menino Jesus em Belém!")
        falar(nomeHeroi, "Deus usou uma estrela para guiar as pessoas até Ele?")
        falar("Anjo Gabriel", "Sim! E até hoje Ele guia quem procura por Ele.")
    } else if (fase == 7) {
        falar(nomeHeroi, "As muralhas caíram só com o som das trombetas!")
        falar("Anjo Gabriel", "Josué e o povo obedeceram a Deus: deram voltas na cidade e tocaram as trombetas. Deus fez o resto!")
        falar(nomeHeroi, "Então com Deus nada é impossível!")
    } else if (fase == 8) {
        falar(nomeHeroi, "Caiu comida do céu! E era gostosa!")
        falar("Anjo Gabriel", "No deserto, Deus mandou o maná todos os dias para o povo de Israel. Nunca faltou!")
        falar(nomeHeroi, "Deus cuida de mim todos os dias também?")
        falar("Anjo Gabriel", "Todos os dias, sem faltar nenhum!")
    } else if (fase == 9) {
        falar(nomeHeroi, "Levei as ovelhinhas para o cercado!")
        falar("Anjo Gabriel", "Jesus disse: Eu sou o Bom Pastor. Se uma ovelha se perde, Ele vai buscar até encontrar.")
        falar(nomeHeroi, "Acho que eu era uma ovelhinha perdida...")
        falar("Anjo Gabriel", "E Ele veio te buscar!")
    } else if (fase == 10) {
        falar("Rei Orgulhoso", "Eu achava que era o maior de todos... mas fiquei sozinho no meu castelo.")
        falar(nomeHeroi, "Ser grande não é ser melhor que os outros.")
        falar("Anjo Gabriel", "Jesus, o Rei dos reis, lavou os pés dos seus amigos. A verdadeira grandeza é servir com humildade.")
        falar("Rei Orgulhoso", "Vou guardar meu orgulho e ajudar as pessoas!")
    } else if (fase == 11) {
        falar(nomeHeroi, "Que tempestade! Os raios caíam por todo lado!")
        falar("Anjo Gabriel", "Os discípulos também ficaram com medo num barco na tempestade. Jesus disse: Silêncio, aquiete-se! E tudo ficou calmo.")
        falar(nomeHeroi, "Jesus manda até no vento?")
        falar("Anjo Gabriel", "Sim! E Ele também pode acalmar as tempestades do seu coração.")
    } else if (fase == 12) {
        falar(nomeHeroi, "Que músicas lindas lá no céu!")
        falar("Anjo Gabriel", "Jacó sonhou com uma escada que ia da terra até o céu, com anjos subindo e descendo.")
        falar("Anjo Gabriel", "E Deus disse a ele: Eu estou com você e vou te guardar por onde você for.")
        falar(nomeHeroi, "Que promessa bonita!")
    } else if (fase == 13) {
        falar(nomeHeroi, "Dei água para todo mundo que tinha sede!")
        falar("Anjo Gabriel", "Jesus contou a história do Bom Samaritano, que parou para ajudar um homem que precisava, mesmo sem conhecê-lo.")
        falar(nomeHeroi, "Então ajudar os outros é um jeito de mostrar amor?")
        falar("Anjo Gabriel", "Exatamente! Amar o próximo como a si mesmo.")
    } else if (fase == 14) {
        falar(nomeHeroi, "Plantei sementes e nasceram flores!")
        falar("Anjo Gabriel", "Jesus contou sobre um semeador. A semente que cai em terra boa cresce e dá muitos frutos.")
        falar("Anjo Gabriel", "A Palavra de Deus é como uma semente. Seu coração está virando terra boa!")
        falar(nomeHeroi, "Sinto algo novo crescendo dentro de mim...")
    } else if (fase == 15) {
        falar("Dragão Dorminhoco", "Uaaah... eu só queria dormir e não fazer nada o dia inteiro...")
        falar(nomeHeroi, "Acorda, amigo! Tem tanta coisa boa para fazer!")
        falar("Anjo Gabriel", "A Bíblia diz: olhe a formiguinha, ela trabalha com alegria. Deus nos deu energia para fazer o bem!")
        falar("Dragão Dorminhoco", "Tá bom... vou acordar e ajudar quem precisa!")
        falar("Anjo Gabriel", "Agora falta só o último desafio: a Grande Nuvem da Dúvida.")
    } else {
        desenharFundo(9, 5, 7, 6)
        effects.starField.endScreenEffect()
        falar("Nuvem da Dúvida", "Eu dizia para todo mundo que Deus não ligava para eles... mas eu estava errada!")
        falar(nomeHeroi, "Deus ama até você, Nuvem!")
        falar("Anjo Gabriel", "Tomé também duvidou, mas Jesus foi até ele com paciência. Felizes os que creem!")
        falar("Nuvem da Dúvida", "Acho que agora eu também quero acreditar...")
        falar("Anjo Gabriel", nomeHeroi + ", você venceu todas as dúvidas. Agora alguém muito especial quer falar com você...")
    }
    
    atorHeroi.startEffect(effects.smiles, 1000)
    pause(1000)
}

function cenaAbertura() {
    
    estado = 2
    limparTudo()
    desenharFundo(9, 7, 7, 6)
    tocarMusica(4)
    game.splash("Leviatan Studios", "apresenta")
    atorHeroi = sprites.create(imgHeroi, SpriteKind.Cenario)
    atorHeroi.setPosition(-10, 42)
    atorHeroi.scale = 2
    atorHeroi.vx = 60
    pause(1000)
    atorHeroi.vx = 0
    if (personagem == 0) {
        falar(nomeHeroi, "Tung tung tung! Eu toco meu tambor de madrugada para acordar todo mundo... mas por dentro me sinto vazio.")
    } else if (personagem == 1) {
        falar(nomeHeroi, "Eu danço o dia inteiro com minha xícara de cappuccino... mas sinto que falta alguma coisa no meu coração.")
    } else {
        falar(nomeHeroi, "Tralalero tralala! Sou o tubarão de tênis mais rápido do mundo! Mas correr tanto não enche meu coração...")
    }
    
    atorAnjo = sprites.create(imgAnjo, SpriteKind.Cenario)
    atorAnjo.setPosition(120, -20)
    atorAnjo.scale = 2
    atorAnjo.vy = 60
    atorAnjo.startEffect(effects.halo, 1500)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    pause(1000)
    atorAnjo.vy = 0
    falar("Anjo Gabriel", "Olá, " + nomeHeroi + "! Eu sou o Anjo Gabriel. Vim te contar uma notícia muito boa!")
    falar(nomeHeroi, "Uma notícia boa? Para mim?")
    falar("Anjo Gabriel", "Sim! Existe Alguém que te ama do jeito que você é. O nome Dele é Jesus!")
    falar(nomeHeroi, "Jesus? Quem é Ele? Eu queria muito conhecer!")
    falar("Anjo Gabriel", "Então venha comigo numa grande jornada! Mas cuidado: as nuvens da dúvida vão tentar te desanimar.")
    falar("Anjo Gabriel", "Aperte A para lançar corações de amor: eles transformam as dúvidas em pombinhas da paz! O botão B te dá um impulso rápido.")
    falar("Anjo Gabriel", "Você tem no máximo 5 vidas. Corações dourados devolvem uma vida!")
    falar(nomeHeroi, "Vamos nessa!")
}

function cenaFinalJesus() {
    
    estado = 2
    limparTudo()
    desenharFundo(9, 5, 7, 6)
    tocarMusica(4)
    atorHeroi = sprites.create(imgHeroi, SpriteKind.Cenario)
    atorHeroi.setPosition(-10, 48)
    atorHeroi.scale = 2
    atorHeroi.vx = 50
    pause(1000)
    atorHeroi.vx = 0
    atorJesus = sprites.create(imgJesus, SpriteKind.Cenario)
    atorJesus.setPosition(115, -20)
    atorJesus.scale = 2
    atorJesus.vy = 34
    atorJesus.startEffect(effects.warmRadial, 3000)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    pause(2000)
    atorJesus.vy = 0
    falar("Jesus", nomeHeroi + ", eu estive com você em cada passo dessa jornada.")
    falar(nomeHeroi, "Era o Senhor que me ajudava quando eu tinha medo?")
    falar("Jesus", "Sim. Quando você andou sobre as águas, quando a tempestade veio e quando a dúvida tentou te parar.")
    falar(nomeHeroi, "Mas eu sou só um brainrot meio esquisito... por que o Senhor me ama?")
    falar("Jesus", "Porque eu te criei com carinho. Não existe ninguém que eu não ame. Eu dei a minha vida por amor a você.")
    falar(nomeHeroi, "Eu quero seguir o Senhor para sempre! Quero ser seu amigo!")
    falar("Jesus", "Eu te recebo com alegria! Eu perdoo seus erros e faço de você uma nova criatura.")
    if (personagem == 0) {
        falar(nomeHeroi, "Antes eu batia meu tambor de madrugada... agora vou tocar louvores para o Senhor!")
    } else if (personagem == 1) {
        falar(nomeHeroi, "Vou dançar de alegria para o Senhor todos os dias!")
    } else {
        falar(nomeHeroi, "Vou correr e nadar pelo mundo contando para todos sobre o Senhor!")
    }
    
    falar("Jesus", "E lembre: eu estarei com você todos os dias, até o fim dos tempos.")
    falar(nomeHeroi, "Obrigado, Jesus! Agora sei que nunca vou estar sozinho!")
    atorHeroi.startEffect(effects.hearts, 3000)
    atorJesus.startEffect(effects.warmRadial, 3000)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    game.showLongText(nomeHeroi + ` se converteu ao cristianismo!

Deus estará sempre ao lado ` + pronome + "!", DialogLayout.Center)
}

function creditos() {
    
    estado = 2
    limparTudo()
    desenharFundo(8, 9, 9, 2)
    tocarMusica(5)
    listaDesfile = [imgTung, imgBallerina, imgTralalero, imgAnjo, imgGigante, imgRei, imgDragao, imgNuvemFinal, imgJesus]
    for (let imagemDesfile of listaDesfile) {
        enfeite = sprites.create(imagemDesfile, SpriteKind.Cenario)
        enfeite.setPosition(176, 90)
        enfeite.vx = -45
        enfeite.lifespan = 6000
        pause(900)
    }
    pause(4000)
    game.showLongText(`CRÉDITOS

BRAINROTS DA FÉ
Um jogo da Leviatan Studios

Direção: Leviatan Studios
Roteiro: Leviatan Studios
Arte e Personagens: Leviatan Studios
Programação: Leviatan Studios
Música e Sons: Leviatan Studios
Testes: Leviatan Studios

Feito com MakeCode Arcade

Obrigado por jogar!
© Leviatan Studios`, DialogLayout.Full)
    game.splash("Leviatan Studios", "Deus te abençoe!")
}

//  ------------------------------------------------------------
//  TELA INICIAL E SELEÇÃO
//  ------------------------------------------------------------
function telaInicial() {
    
    estado = 0
    limparTudo()
    fundo = image.create(160, 120)
    fundo.fill(8)
    fundo.fillRect(0, 50, 160, 40, 9)
    for (let indiceLuz = 0; indiceLuz < 8; indiceLuz++) {
        fundo.drawLine(80, 40, indiceLuz * 23, 0, 5)
    }
    fundo.fillRect(0, 92, 160, 28, 7)
    fundo.fillRect(36, 84, 88, 10, 7)
    fundo.fillRect(54, 76, 52, 10, 7)
    fundo.fillRect(75, 20, 10, 58, 5)
    fundo.fillRect(64, 32, 32, 10, 5)
    fundo.fillRect(77, 22, 6, 56, 14)
    fundo.fillRect(66, 34, 28, 6, 14)
    scene.setBackgroundImage(fundo)
    for (let indiceTitulo = 0; indiceTitulo < 3; indiceTitulo++) {
        enfeite = sprites.create(imgHerois[indiceTitulo], SpriteKind.Cenario)
        enfeite.setPosition(24 + indiceTitulo * 56, 102)
    }
    tocarMusica(0)
    pause(500)
    game.splash("BRAINROTS DA FÉ", "Leviatan Studios")
    game.splash("Aperte A para jogar!")
}

function moverCursor() {
    for (let opcaoAtual of opcoes) {
        opcaoAtual.scale = 1
    }
    opcoes[selecionado].scale = 2
    cursor.setPosition(opcoes[selecionado].x, opcoes[selecionado].y - 26)
    rotuloNome.sayText(nomes[selecionado], 100000, false)
    rotuloInfo.sayText(descricoes[selecionado], 100000, false)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
}

function selecionarPersonagem() {
    
    estado = 2
    limparTudo()
    desenharFundo(10, 12, 12, 2)
    opcoes = []
    for (let indiceOpcao = 0; indiceOpcao < 3; indiceOpcao++) {
        enfeite = sprites.create(imgHerois[indiceOpcao], SpriteKind.Cenario)
        enfeite.setPosition(30 + indiceOpcao * 50, 66)
        opcoes.push(enfeite)
    }
    cursor = sprites.create(imgSeta, SpriteKind.Cenario)
    rotuloNome = sprites.create(image.create(1, 1), SpriteKind.Cenario)
    rotuloNome.setPosition(80, 112)
    rotuloInfo = sprites.create(image.create(1, 1), SpriteKind.Cenario)
    rotuloInfo.setPosition(80, 20)
    game.showLongText("Escolha seu herói! Use as setas para os lados e aperte A.", DialogLayout.Bottom)
    selecionado = 0
    moverCursor()
    pause(300)
    escolhido = false
    estado = 3
    while (!escolhido) {
        pause(50)
    }
    estado = 2
    personagem = selecionado
    if (personagem == 0) {
        velocidade = 75
        cadencia = 500
        forca = 2
        duracaoDash = 250
        pronome = "dele"
    } else if (personagem == 1) {
        velocidade = 100
        cadencia = 380
        forca = 1
        duracaoDash = 420
        pronome = "dela"
    } else {
        velocidade = 88
        cadencia = 300
        forca = 1
        duracaoDash = 250
        pronome = "dele"
    }
    
    nomeHeroi = nomes[personagem]
    imgHeroi = imgHerois[personagem]
    imgHeroiEsq = imgHeroi.clone()
    imgHeroiEsq.flipX()
    opcoes[personagem].startEffect(effects.hearts, 1000)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    game.splash("Você escolheu:", nomeHeroi)
}

//  ------------------------------------------------------------
//  EVENTOS
//  ------------------------------------------------------------
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    if (estado == 3) {
        selecionado = selecionado - 1
        if (selecionado < 0) {
            selecionado = 2
        }
        
        moverCursor()
    }
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    if (estado == 3) {
        selecionado = selecionado + 1
        if (selecionado > 2) {
            selecionado = 0
        }
        
        moverCursor()
    }
    
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (estado == 3) {
        escolhido = true
    } else if (estado == 1) {
        if (fase == 14) {
            plantarSemente()
        } else {
            atirar()
        }
        
    }
    
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function on_a_repeated() {
    if (estado == 1 && fase != 14) {
        atirar()
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    if (estado == 1 && game.runtime() >= proximoDash) {
        fimDash = game.runtime() + duracaoDash
        proximoDash = game.runtime() + 1200
        fimInvencivel = Math.max(fimInvencivel, fimDash)
        jogador.startEffect(effects.trail, duracaoDash)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    }
    
})
info.onCountdownEnd(function on_countdown_end() {
    
    if (estado == 1) {
        faseConcluida = true
    }
    
})
info.onLifeZero(function on_life_zero() {
    
    if (estado == 1) {
        falhou = true
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Duvida, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    if (estado == 1 && game.runtime() >= fimInvencivel) {
        tomarDano()
        virarPomba(otherSprite)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Perigo, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    tomarDano()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chefe, function on_on_overlap3(sprite3: Sprite, otherSprite3: Sprite) {
    tomarDano()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Duvida, function on_on_overlap4(sprite4: Sprite, otherSprite4: Sprite) {
    sprite4.destroy()
    virarPomba(otherSprite4)
    info.changeScoreBy(10)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Chefe, function on_on_overlap5(sprite5: Sprite, otherSprite5: Sprite) {
    
    sprite5.destroy()
    if (estado == 1) {
        if (escudo) {
            otherSprite5.sayText("Não vou ouvir!", 400, false)
        } else {
            amor += forca
            info.changeScoreBy(5)
            otherSprite5.startEffect(effects.hearts, 200)
            atualizarBarra()
            if (amor >= amorMax) {
                faseConcluida = true
            }
            
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coletavel, function on_on_overlap6(sprite6: Sprite, otherSprite6: Sprite) {
    if (estado == 1) {
        if (fase == 6) {
            info.changeScoreBy(20)
        } else {
            info.changeScoreBy(10)
        }
        
        otherSprite6.destroy(effects.spray, 100)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        if (fase == 6) {
            criarEstrela()
        } else if (fase == 7) {
            derrubarMuro()
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Vida, function on_on_overlap7(sprite7: Sprite, otherSprite7: Sprite) {
    if (info.life() < 5) {
        info.changeLifeBy(1)
    } else {
        info.changeScoreBy(50)
    }
    
    otherSprite7.destroy()
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Animal, function on_on_overlap8(sprite8: Sprite, otherSprite8: Sprite) {
    otherSprite8.setKind(SpriteKind.Seguidor)
    otherSprite8.follow(jogador, 80)
    otherSprite8.sayText("Béé!", 600, false)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Poco, function on_on_overlap9(sprite9: Sprite, otherSprite9: Sprite) {
    
    if (estado == 1 && carregando == 0) {
        carregando = 1
        jogador.sayText("Peguei água!", 800, false)
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Viajante, function on_on_overlap10(sprite10: Sprite, otherSprite10: Sprite) {
    
    if (estado == 1 && carregando == 1) {
        carregando = 0
        info.changeScoreBy(30)
        otherSprite10.setKind(SpriteKind.Cenario)
        otherSprite10.sayText("Obrigado! Deus te abençoe!", 1500, false)
        otherSprite10.vx = 40
        otherSprite10.setFlag(SpriteFlag.AutoDestroy, true)
        otherSprite10.startEffect(effects.hearts, 800)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
    
})
sprites.onOverlap(SpriteKind.Seguidor, SpriteKind.Destino, function on_on_overlap11(sprite11: Sprite, otherSprite11: Sprite) {
    info.changeScoreBy(25)
    sprite11.destroy(effects.hearts, 300)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Passaro, SpriteKind.Semente, function on_on_overlap12(sprite12: Sprite, otherSprite12: Sprite) {
    otherSprite12.setKind(SpriteKind.Cenario)
    otherSprite12.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Passaro, function on_on_overlap13(sprite13: Sprite, otherSprite13: Sprite) {
    otherSprite13.setKind(SpriteKind.Cenario)
    otherSprite13.setVelocity(otherSprite13.vx, -90)
    otherSprite13.lifespan = 1500
    info.changeScoreBy(5)
    jogador.sayText("Xô, passarinho!", 600, false)
})
sprites.onDestroyed(SpriteKind.Semente, function on_on_destroyed(sprite14: Sprite) {
    
    if (estado == 1 && fase == 14) {
        florNova = sprites.create(imgFlor, SpriteKind.Cenario)
        florNova.setPosition(sprite14.x, sprite14.y - 3)
        florNova.z = 1
        florNova.lifespan = 40000
        florNova.startEffect(effects.hearts, 400)
        info.changeScoreBy(15)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
    
})
sprites.onDestroyed(SpriteKind.Aviso, function on_on_destroyed2(sprite15: Sprite) {
    
    if (estado == 1 && fase == 11) {
        perigo = criarPerigo(imgRaio, sprite15.x, sprite15.y - 6, 0, 0)
        perigo.lifespan = 500
        scene.cameraShake(2, 200)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    }
    
})
game.onUpdate(function on_on_update() {
    
    if (estado == 1) {
        if (controller.left.isPressed()) {
            dirX = -1
            jogador.setImage(imgHeroiEsq)
        } else if (controller.right.isPressed()) {
            dirX = 1
            jogador.setImage(imgHeroi)
        } else if (controller.up.isPressed() || controller.down.isPressed()) {
            dirX = 0
        }
        
        if (controller.up.isPressed()) {
            dirY = -1
        } else if (controller.down.isPressed()) {
            dirY = 1
        } else if (controller.left.isPressed() || controller.right.isPressed()) {
            dirY = 0
        }
        
        if (game.runtime() < fimDash) {
            controller.moveSprite(jogador, velocidade * 3, velocidade * 3)
        } else {
            controller.moveSprite(jogador, velocidade, velocidade)
        }
        
        if (game.runtime() < fimInvencivel && game.runtime() % 200 < 100) {
            jogador.setFlag(SpriteFlag.Invisible, true)
        } else {
            jogador.setFlag(SpriteFlag.Invisible, false)
        }
        
        if (fase == 12) {
            for (let nuvemOnda of sprites.allOfKind(SpriteKind.Duvida)) {
                nuvemOnda.vy = 45 * Math.cos(nuvemOnda.x / 12)
            }
        }
        
        if (fase == 16) {
            chefe.y = 34 + 10 * Math.sin(game.runtime() / 500)
        }
        
    }
    
})
game.onUpdateInterval(250, function on_update_interval() {
    
    if (estado == 1) {
        tick += 1
        nivel = Math.min(4, Math.idiv(tempoFase, 60))
        if (ehChefe(fase)) {
            logicaChefe()
        } else {
            logicaFaseNormal()
        }
        
    }
    
})
game.onUpdateInterval(1000, function on_update_interval2() {
    
    if (estado == 1) {
        tempoFase += 1
        if (tempoFase % 40 == 0) {
            criarVida()
        }
        
        if (fase == 9 && tempoFase % 60 == 0) {
            posicionarEspinhos()
        }
        
        if (ehChefe(fase)) {
            if (!escudo && tempoFase % 18 == 0) {
                escudo = true
                fimEscudo = game.runtime() + 4000
                chefe.startEffect(effects.bubbles, 4000)
                chefe.sayText("Não vou ouvir!", 1500, false)
            }
            
            if (tempoFase % 2 == 0) {
                pisoAmor = Math.idiv(amorMax * (etapaChefe - 1), 3)
                if (amor > pisoAmor) {
                    amor = amor - 1
                    atualizarBarra()
                }
                
            }
            
        }
        
    }
    
})
//  ------------------------------------------------------------
//  IMAGENS (sprites desenhados pela Leviatan Studios)
//  ------------------------------------------------------------
let imgTung = img`
    . . . . e e e e e e e e . . . .
    . . . e d d d d d d d d e . . .
    . . . e d e e e e e e d e . . .
    . . . e d d d d d d d d e . . .
    . . . e e e e e e e e e e . . .
    . . . e 1 1 e e e e 1 1 e . . d
    . . . e 1 f e e e e 1 f e . d .
    . . . e e e e e e e e e e . d .
    . . . e e f f f f f f e e . d .
    . . . e e f 2 2 2 2 f e e . d .
    . e e . e e f f f f e e e . e e
    . d . e e e e e e e e e e . . .
    . . . e e e e e e e e e e . . .
    . . . . e e . . . . e e . . . .
    . . . . e e . . . . e e . . . .
    . . . f f f . . . . f f f . . .
    `
let imgBallerina = img`
    . . . . . d d d d d d . . . . .
    . . . . d e e d e e e d d . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . . 1 f 1 1 1 1 f 1 1 1 . .
    . . . . 1 1 1 1 1 1 1 1 . . 1 .
    . . . . 1 1 1 3 3 1 1 1 1 1 . .
    . . . . . 1 1 1 1 1 1 . . . . .
    . d . . . . . d d . . . . . d .
    . . d . . . 3 3 3 3 . . . d . .
    . . . d d 3 3 a 3 3 3 d d . . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . 3 3 b 3 3 b 3 3 b 3 3 b 3 3 .
    . . . . . . d . . d . . . . . .
    . . . . . . d . . d . . . . . .
    . . . . . . d . . d . . . . . .
    . . . . . 3 3 . . 3 3 . . . . .
    `
let imgTralalero = img`
    . . . . . . . 8 . . . . . . . .
    . . . . . . 8 8 . . . . . . . .
    . . . . . 8 8 8 8 . . . . . . .
    8 . . . 8 9 9 9 9 8 8 8 8 . . .
    8 8 . 8 9 9 9 9 9 9 9 9 9 8 8 .
    8 9 8 9 9 9 9 9 9 9 9 1 f 9 8 .
    8 9 9 9 9 9 9 9 9 9 9 1 1 9 9 8
    8 9 8 1 1 1 1 1 1 1 1 1 1 1 1 8
    8 8 . 8 1 1 1 1 1 1 1 f 1 f 8 .
    8 . . . 8 8 1 1 1 1 1 1 8 . . .
    . . . . . 8 8 8 8 8 8 8 8 8 . .
    . . . . . d . . . d . . . d . .
    . . . . . d . . . d . . . d . .
    . . . . . d . . . d . . . d . .
    . . . . 1 8 1 . 1 8 1 . 1 8 1 .
    . . . . f f f . f f f . f f f .
    `
let imgJesus = img`
    . . . . . 5 5 5 5 5 5 . . . . .
    . . . . 5 . . . . . . 5 . . . .
    . . . . . e e e e e e . . . . .
    . . . . e e d d d d e e . . . .
    . . . . e d f d d f d e . . . .
    . . . . e d d d d d d e . . . .
    . . . . e e d 2 2 d e e . . . .
    . . . . . e e e e e e . . . . .
    . . . . 1 1 e e e e 1 1 . . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . d 1 1 8 1 1 1 1 1 1 1 d . .
    . . . 1 1 1 8 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 8 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 8 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . . e e . . . . e e . . . .
    `
let imgAnjo = img`
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . 5 . . . . . 5 . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    1 1 . . . 5 d d d 5 . . . 1 1 .
    1 1 1 . . d f d f d . . 1 1 1 .
    1 9 1 1 . d d d d d . 1 1 9 1 .
    . 1 9 1 1 . d 3 d . 1 1 9 1 . .
    . 1 1 9 1 1 1 1 1 1 1 9 1 1 . .
    . . 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . . . . 1 1 5 1 1 1 . . . . .
    . . . . . 1 1 5 1 1 1 . . . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . . 1 1 1 1 1 1 1 1 . . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . . . . d d . . d d . . . . .
    `
let imgGigante = img`
    . . . . . . . c c c c c c c c c c . . . . . . .
    . . . . . c c a a a a a a a a a a c c . . . . .
    . . . . c a a a a a a a a a a a a a a c . . . .
    . . . c a a a a a a a a a a a a a a a a c . . .
    . . c a a a a a a a a a a a a a a a a a a c . .
    . . c a a f f f a a a a a a a a f f f a a c . .
    . c a a a a a f f a a a a a a f f a a a a a c .
    . c a a a 1 1 1 a a a a a a a a 1 1 1 a a a c .
    . c a a a 1 f 1 a a a a a a a a 1 f 1 a a a c .
    . c a a a 1 1 1 a a a a a a a a 1 1 1 a a a c .
    . c a a a a a a a a a a a a a a a a a a a a c .
    . c a a a a a a a a a 3 3 a a a a a a a a a c .
    . c a a a a a a a a a a a a a a a a a a a a c .
    . c a a a a a a f f f f f f f f a a a a a a c .
    . c a a a a a f a a a a a a a a f a a a a a c .
    . . c a a a a a a a a a a a a a a a a a a c . .
    . . . c a a a a a a a a a a a a a a a a c . . .
    . . c c c a a a a a a a a a a a a a a c c c . .
    . c a a c c a a a a a a a a a a a a c c a a c .
    c a a . . c a a a a a a a a a a a a c . . a a c
    c a . . . c a a a a a a a a a a a a c . . . a c
    . . . . . c a a a a c c c c a a a a c . . . . .
    . . . . . c c c c c . . . . c c c c c . . . . .
    . . . . c c c c c c . . . . c c c c c c . . . .
    `
let imgRei = img`
    . . . . . . 5 . . . . . 5 . . . . . 5 . . . . .
    . . . . . . 5 5 . . . 5 5 5 . . . 5 5 . . . . .
    . . . . . . 5 5 5 . 5 5 5 5 5 . 5 5 5 . . . . .
    . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . .
    . . . . . . 5 5 2 5 5 5 2 5 5 5 2 5 5 . . . . .
    . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . .
    . . . . . d d d d d d d d d d d d d d d . . . .
    . . . . . d d d f f d d d d f f d d d d . . . .
    . . . . . d d 1 f d d d d d d 1 f d d d . . . .
    . . . . . d d d d d d d 4 4 d d d d d d . . . .
    . . . . . d d d d d d 4 4 4 4 d d d d d . . . .
    . . . . . d e e e e e e e e e e e e e d . . . .
    . . . . . d d e e e d d d d e e e d d d . . . .
    . . . . . . d d d d f f f f d d d d d . . . . .
    . . . . . . . d d d d d d d d d d d . . . . . .
    . . . . 2 2 2 a a a a a a a a a a 2 2 2 . . . .
    . . . 2 2 2 2 a a a a 5 5 a a a a 2 2 2 2 . . .
    . . 2 2 2 2 2 a a a a 5 5 a a a a 2 2 2 2 2 . .
    . . 2 2 2 2 d a a a a 5 5 a a a a d 2 2 2 2 . .
    . . 2 2 2 2 a a a a a 5 5 a a a a a 2 2 2 2 . .
    . . 2 2 2 2 a a a a a 5 5 a a a a a 2 2 2 2 . .
    . . 2 2 2 2 a a a a a a a a a a a a 2 2 2 2 . .
    . . 2 2 2 2 2 a a a a a a a a a a 2 2 2 2 2 . .
    . . . . . . . e e . . . . . . . . e e . . . . .
    `
let imgDragao = img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . 7 . . . . 7 . . . . . . . .
    . . . . . . . . . 7 7 7 . . 7 7 7 . . . . . . .
    . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . .
    . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . .
    . . . . . . 7 7 7 f f 7 7 7 7 7 f f 7 7 7 . . .
    . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 .
    . . . 7 7 f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . .
    . . . 7 7 7 7 7 7 7 3 3 3 3 3 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 3 f f 3 7 7 7 7 7 7 . . . .
    . . . . . 7 7 7 7 7 3 3 3 3 7 7 7 7 7 . . . . .
    . . . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . . .
    . . . 6 6 . . 7 7 7 7 7 7 7 7 7 7 . . 6 6 . . .
    . . 6 6 6 6 . 7 7 d d d d d d 7 7 . 6 6 6 6 . .
    . . 6 6 6 6 6 7 d d d d d d d d 7 6 6 6 6 6 . .
    . . . 6 6 6 6 7 d d d d d d d d 7 6 6 6 6 . . .
    . . . . 6 6 6 7 d d d d d d d d 7 6 6 6 . . . .
    . . . . . . . 7 d d d d d d d d 7 . . . . . . .
    . . . . . . . 7 7 d d d d d d 7 7 . . . . 7 7 7
    . . . . . . . . 7 7 7 7 7 7 7 7 7 7 . . 7 7 . .
    . . . . . . . . 7 7 . . . . 7 7 7 7 7 7 7 7 . .
    . . . . . . . 7 7 7 . . . 7 7 7 . . . . . . . .
    . . . . . . 7 7 7 7 . . 7 7 7 7 . . . . . . . .
    `
let imgNuvemFinal = img`
    . . . . . . . . . . . c c c c c c . . . . . . . . . . . . . . .
    . . . . . . c c c c . c b b b b b c . . c c c c . . . . . . . .
    . . . . . c b b b b c c b b b b b b c c b b b b c . . . . . . .
    . . . . c b b b b b b b b b b b b b b b b b b b b c . . . . . .
    . . c c c b b b b b b b b b b b b b b b b b b b b b c c c . . .
    . c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c .
    c b b b b b f f f f b b b b b b b b b b f f f f b b b b b b b c
    c b b b b b b b f f b b b b b b b b f f b b b b b b b b b b b c
    c b b b b b b 1 1 1 b b b b b b b b 1 1 1 b b b b b b b b b b c
    c b b b b b b 1 f 1 b b b b b b b b 1 f 1 b b b b b b b b b b c
    c b b b b b b 1 1 1 b b b b b b b b 1 1 1 b b b b b b b b b b c
    c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c
    c b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b c
    c b b b b b b b b b f b b b b b b b b f b b b b b b b b b b b c
    c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c
    . c b b b b b b b b b b b b b b b b b b b b b b b b b b b b c .
    . . c b b b b b b b b b b b b b b b b b b b b b b b b b b c . .
    . . . c c b b b b c c b b b b b b c c b b b b b b b c c . . . .
    . . . . . c c c c . . c c c c c c . . c c c c c c c . . . . . .
    . . . . . . c . . . . . c . . . . c . . . . . c . . . . . . . .
    . . . . . . c . . . . . . . . . . c . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `
let imgDuvida = img`
    . . . . c c c c . . . .
    . . c c b b b b c c . .
    . c b b b b b b b b c .
    c b b f b b b b f b b c
    c b b b b b b b b b b c
    c b b b f f f f b b b c
    c b b f b b b b f b b c
    . c b b b b b b b b c .
    . . c c b c c b c c . .
    . . . . c . . c . . . .
    `
let imgPomba = img`
    . . . . . 1 1 . . .
    . . . . 1 1 f 4 . .
    1 1 . . 1 1 1 . . .
    1 1 1 1 1 1 1 1 . .
    . 1 1 1 1 1 1 1 1 .
    . . 1 1 1 1 1 1 1 1
    . . . . 1 1 . . . .
    . . . . . . . . . .
    `
let imgCoracao = img`
    . 2 2 . . 2 2 .
    2 3 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
    . . . 2 2 . . .
    `
let imgVida = img`
    . . 5 5 . . . 5 5 . .
    . 5 2 2 5 . 5 2 2 5 .
    5 2 1 2 2 5 2 2 2 2 5
    5 2 2 2 2 2 2 2 2 2 5
    5 2 2 2 2 2 2 2 2 2 5
    . 5 2 2 2 2 2 2 2 5 .
    . . 5 2 2 2 2 2 5 . .
    . . . 5 2 2 2 5 . . .
    . . . . 5 2 5 . . . .
    . . . . . 5 . . . . .
    `
let imgPao = img`
    . . 4 4 4 4 4 4 . .
    . 4 d 4 d 4 d 4 4 .
    4 4 4 4 4 4 4 4 4 4
    4 d 4 4 4 4 4 4 d 4
    4 4 4 4 4 4 4 4 4 4
    . e e e e e e e e .
    `
let imgPeixe = img`
    . . . 9 9 9 9 . . .
    9 . 9 9 9 9 9 9 9 .
    9 9 9 9 9 9 9 f 9 9
    9 9 9 9 9 9 9 9 9 9
    9 . 9 9 9 9 9 9 9 .
    . . . 9 9 9 9 . . .
    `
let imgGota = img`
    . . 9 9 . .
    . . 9 9 . .
    . 9 9 9 9 .
    9 9 1 9 9 9
    9 1 9 9 9 9
    9 9 9 9 9 9
    9 9 9 9 9 8
    . 8 8 8 8 .
    `
let imgRocha = img`
    . . . c c c c c . . . .
    . . c b b b b b c c . .
    . c b b d b b b b b c .
    c b b b b b b b b b b c
    c b b b b b b d b b b c
    c b b d b b b b b b b c
    c b b b b b b b b b b c
    . c b b b b b b b b c .
    . . c c b b b b c c . .
    . . . . c c c c . . . .
    `
let imgOvelha = img`
    . . 1 1 1 1 1 1 . . . .
    . 1 1 1 1 1 1 1 1 1 . .
    1 1 1 1 1 1 1 1 1 f f .
    1 1 1 1 1 1 1 1 1 f 1 f
    1 1 1 1 1 1 1 1 1 f f f
    1 1 1 1 1 1 1 1 1 1 . .
    . 1 1 1 1 1 1 1 1 . . .
    . . f . f . . f . f . .
    . . f . f . . f . f . .
    . . . . . . . . . . . .
    `
let imgPato = img`
    . . . . . . 5 5 5 . . .
    . . . . . 5 5 5 5 5 . .
    . . . . . 5 5 f 5 5 4 4
    . . . . . 5 5 5 5 5 4 .
    5 . . . . . 5 5 5 . . .
    5 5 . . 5 5 5 5 5 5 5 5
    5 5 5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 5 5 . .
    . . . . 4 . . 4 . . . .
    `
let imgArca = img`
    . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . .
    . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . .
    . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . .
    . . . . . . . e d d d d d d d d e . . . . . . .
    . . . . . . . e d f d d d d f d e . . . . . . .
    . . . . . . . e d d d d d d d d e . . . . . . .
    e e e e e e e e e e e e e e e e e e e e e e e e
    e d d d d d d d d d d d d d d d d d d d d d d e
    . e e e e e e e e e e e e e e e e e e e e e e .
    . e d d d d d d d d d d d d d d d d d d d d e .
    . . e e e e e e e e e e e e e e e e e e e e . .
    . . . e d d d d d d d d d d d d d d d d e . . .
    . . . . e e e e e e e e e e e e e e e e . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    `
let imgEstrela = img`
    . . . . 5 5 . . . .
    . . . . 5 5 . . . .
    . . . 5 5 5 5 . . .
    5 5 5 5 1 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 . .
    . 5 5 5 . . 5 5 5 .
    . 5 5 . . . . 5 5 .
    5 5 . . . . . . 5 5
    `
let imgTrombeta = img`
    . . . . . . . . . . 5 5
    5 . . . . . . . . 5 5 5
    5 5 5 5 5 5 5 5 5 5 4 5
    5 4 4 4 4 4 4 4 4 5 4 5
    5 . . . . . . . . 5 5 5
    . . . . . . . . . . 5 5
    `
let imgMuro = img`
    e e e e e e e e e e e e e e e e
    4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 e
    4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 e
    e e e e e e e e e e e e e e e e
    4 4 4 e 4 4 4 4 4 4 4 4 e 4 4 4
    4 4 4 e 4 4 4 4 4 4 4 4 e 4 4 4
    e e e e e e e e e e e e e e e e
    4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 e
    4 4 4 4 4 4 4 e 4 4 4 4 4 4 4 e
    e e e e e e e e e e e e e e e e
    `
let imgMana = img`
    . . 1 1 . .
    . 1 d 1 1 .
    1 1 1 1 d 1
    1 d 1 1 1 1
    . 1 1 d 1 .
    . . 1 1 . .
    `
let imgTornado = img`
    d d 4 d d d 4 d d d
    . d d d 4 d d d d .
    . . d 4 d d 4 d . .
    . . d d d 4 d d . .
    . . . d 4 d d . . .
    . . . d d d 4 . . .
    . . . . d 4 . . . .
    . . . . d d . . . .
    . . . . . d . . . .
    . . . . d . . . . .
    . . . . . d . . . .
    . . . . . . . . . .
    `
let imgCercado = img`
    e . . . e . . . e . . . e . . . e . . e
    e e e e e e e e e e e e e e e e e e e e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 3 7 7 7 7 7 7 7 7 3 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 7 7 7 3 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 3 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e
    e e e e e e e e e e e e e e e e e e e e
    e . . . e . . . e . . . e . . . e . . e
    `
let imgEspinho = img`
    . . . 7 . . . 7 . . . .
    . 7 . 7 7 . 7 7 . 7 . .
    . 7 7 6 7 7 7 6 7 7 . .
    7 7 6 7 7 6 7 7 6 7 7 .
    7 6 7 7 6 7 7 6 7 7 6 7
    7 7 7 6 7 7 6 7 7 6 7 7
    . 7 6 7 7 6 7 7 6 7 7 .
    . . 7 7 6 7 7 6 7 7 . .
    . . . e e . . e e . . .
    . . . e . . . . e . . .
    `
let imgRaio = img`
    . . . . 5 5 5 .
    . . . 5 5 5 . .
    . . 5 5 5 . . .
    . 5 5 5 . . . .
    5 5 5 5 5 5 . .
    . . . 5 5 . . .
    . . 5 5 . . . .
    . 5 5 5 5 5 5 .
    . . . . 5 5 . .
    . . . 5 5 . . .
    . . 5 5 . . . .
    . 5 5 . . . . .
    5 5 . . . . . .
    5 . . . . . . .
    `
let imgAviso = img`
    . . . c c c c c c . . .
    . c c c c c c c c c c .
    c c c c c c c c c c c c
    c c c c c c c c c c c c
    . c c c c c c c c c c .
    . . . c c c c c c . . .
    `
let imgChuva = img`
    9
    9
    9
    1
    `
let imgViajante = img`
    . . . . e e e e . . . .
    . . . e e e e e e . . .
    . . . e d d d d d e . .
    . . . d f d d f d d . .
    . . . d d d d d d . . .
    . . . . d f f d . . . .
    . . . 4 4 4 4 4 4 . . .
    . . 4 4 4 4 4 4 4 4 . .
    . d 4 4 4 4 4 4 4 4 d .
    . . 4 4 4 4 4 4 4 4 . .
    . . 4 4 4 4 4 4 4 4 . .
    . . 4 4 4 4 4 4 4 4 . .
    . . . 4 4 4 4 4 4 . . .
    . . . 4 4 . . 4 4 . . .
    . . . e e . . e e . . .
    . . . . . . . . . . . .
    `
let imgPoco = img`
    . . e e e e e e e e e e . .
    . e e e e e e e e e e e e .
    . . e . . . . . . . . e . .
    . . e . . . . f . . . e . .
    . . e . . . . f . . . e . .
    . . e . . . 9 9 9 . . e . .
    . . e . . . 9 9 9 . . e . .
    b b b b b b b b b b b b b b
    b c b b c b b c b b c b b b
    b 8 8 8 8 8 8 8 8 8 8 8 8 b
    b c b b c b b c b b c b b b
    b b b c b b b b c b b b c b
    b c b b b b c b b b b c b b
    b b b b b b b b b b b b b b
    `
let imgSemente = img`
    . . 7 7 . .
    . 7 . . 7 .
    . . e e . .
    . e e e e .
    . . e e . .
    `
let imgFlor = img`
    . . 3 3 3 3 . .
    . 3 3 5 5 3 3 .
    . 3 5 5 5 5 3 .
    . 3 3 5 5 3 3 .
    . . 3 3 3 3 . .
    . . . 7 7 . . .
    . 7 . 7 7 . . .
    . 7 7 7 7 . 7 .
    . . . 7 7 7 7 .
    . . . 7 7 . . .
    `
let imgPassaro = img`
    . . e e . . . .
    . e e f e 4 . .
    e e e e e . . .
    . e e e e e e e
    . . e e e e . .
    . . . 4 . 4 . .
    `
let imgNota = img`
    . . . a a a a a
    . . . a a a a a
    . . . a . . . a
    . . . a . . . a
    . . . a . . . a
    . a a a . a a a
    a a a a a a a a
    . a a . . a a .
    `
let imgNuvemBranca = img`
    . . . . 1 1 1 1 . . . . . . . .
    . . 1 1 1 1 1 1 1 1 . . 1 1 . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
    `
let imgOnda = img`
    . . 1 1 1 1 . .
    1 1 . . . . 1 1
    . . . . . . . .
    `
let imgZzz = img`
    . . 9 9 9 9 . .
    . 9 . . . . 9 .
    9 . 8 8 8 8 . 9
    9 . . . . 8 . 9
    9 . . . 8 . . 9
    9 . 8 8 8 8 . 9
    . 9 . . . . 9 .
    . . 9 9 9 9 . .
    `
let imgCoroa = img`
    5 . . 5 5 . . 5
    5 5 . 5 5 . 5 5
    5 5 5 5 5 5 5 5
    5 2 5 5 5 5 2 5
    5 5 5 5 5 5 5 5
    4 4 4 4 4 4 4 4
    `
let imgSeta = img`
    . . 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 . .
    5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 . .
    . . . 5 5 5 5 . . .
    . . . . 5 5 . . . .
    `
let imgPeixeEsq = imgPeixe.clone()
imgPeixeEsq.flipX()
let imgPassaroEsq = imgPassaro.clone()
imgPassaroEsq.flipX()
//  ------------------------------------------------------------
//  VARIÁVEIS
//  ------------------------------------------------------------
let estado = 0
let fase = 1
let personagem = 0
let selecionado = 0
let escolhido = false
let nomeHeroi = ""
let pronome = "dele"
let jogador : Sprite = null
let chefe : Sprite = null
let barra : Sprite = null
let cursor : Sprite = null
let rotuloNome : Sprite = null
let rotuloInfo : Sprite = null
let atorHeroi : Sprite = null
let atorAnjo : Sprite = null
let atorExtra : Sprite = null
let atorJesus : Sprite = null
let tiro : Sprite = null
let novaSemente : Sprite = null
let pomba : Sprite = null
let item : Sprite = null
let perigo : Sprite = null
let nuvem : Sprite = null
let coracaoExtra : Sprite = null
let alvo : Sprite = null
let tijolo : Sprite = null
let florNova : Sprite = null
let enfeite : Sprite = null
let aviso : Sprite = null
let passarinho : Sprite = null
let listaMuros : Sprite[] = []
let listaSementes : Sprite[] = []
let opcoes : Sprite[] = []
let listaDesfile : Image[] = []
let fundo : Image = null
let imgHeroi : Image = null
let imgHeroiEsq : Image = null
let amor = 0
let amorMax = 100
let pisoAmor = 0
let etapaChefe = 1
let novaEtapa = 1
let padraoAtaque = 0
let larguraBarra = 0
let angulo = 0
let escudo = false
let fimEscudo = 0
let faseConcluida = false
let falhou = false
let tempoFase = 0
let tick = 0
let nivel = 0
let dirX = 1
let dirY = 0
let velTiroX = 0
let velTiroY = 0
let distX = 0
let distY = 0
let distancia = 0
let posX = 0
let posY = 0
let velocidade = 80
let cadencia = 400
let forca = 1
let duracaoDash = 250
let ultimoTiro = 0
let fimInvencivel = 0
let fimDash = 0
let proximoDash = 0
let carregando = 0
let pontosInicioFase = 0
let horaReconstruir = 0
//  Duração de cada fase normal em segundos (300 = 5 minutos)
let DURACAO_FASE = 300
let imgHerois = [imgTung, imgBallerina, imgTralalero]
let nomes = ["Tung Tung Tung Sahur", "Ballerina Cappuccina", "Tralalero Tralala"]
let descricoes = ["FORTE: coração em dobro", "RÁPIDA: super impulso", "ÁGIL: corações ligeiros"]
let titulos = ["Os Pães do Céu", "A Pesca Milagrosa", "Sobre as Águas", "A Arca de Noé", "Gigante Resmungão", "A Estrela de Belém", "Muralhas de Jericó", "Maná no Deserto", "O Pequeno Pastor", "Rei Orgulhoso", "A Tempestade", "Cânticos no Céu", "O Bom Samaritano", "A Semeadura", "Dragão Dorminhoco", "Nuvem da Dúvida"]
let instrucoes = ["Pegue os pães que caem do céu! Aperte A para lançar corações e transformar as nuvens de dúvida em pombinhas. Resista até o tempo acabar!", "Pegue os peixes que nadam pelo mar! Cuidado com as nuvens de dúvida que ficam quicando.", "Ande sobre as águas! Desvie das pedras e pegue as gotas brilhantes.", "Encoste nos bichinhos para eles te seguirem e leve todos até a arca!", "O Gigante Resmungão está muito bravo! Lance corações (A) até encher a barra de amor. Quando ele fizer bolhas, não está ouvindo: espere um pouco!", "Siga a estrela! Cada vez que pegar uma, outra aparece. As nuvens frias vão te seguir!", "Pegue as trombetas para derrubar as muralhas! Desvie das pedras rolando.", "Pegue o maná que cai do céu e as gotas de água. Cuidado com os redemoinhos de areia!", "Leve as ovelhinhas para o cercado. Não encoste nos espinhos!", "O Rei Orgulhoso some e aparece! Lance corações e desvie das coroas.", "Quando aparecer uma sombra no chão, saia de perto: vai cair um raio! Pegue as pombinhas da paz.", "Pegue as notas musicais! As nuvens de dúvida voam em ondas.", "Pegue água no poço e leve para quem está com sede!", "Aperte A para plantar sementes e espere as flores crescerem! Espante os passarinhos encostando neles.", "O Dragão Dorminhoco solta bolhas de sono! Lance corações para acordá-lo.", "Último desafio! A Grande Nuvem da Dúvida muda de ataque o tempo todo. Coragem: Deus está com você!"]
//  ------------------------------------------------------------
//  INÍCIO DO JOGO
//  ------------------------------------------------------------
telaInicial()
selecionarPersonagem()
cenaAbertura()
info.setLife(5)
info.setScore(0)
fase = 1
while (fase <= 16) {
    pontosInicioFase = info.score()
    iniciarFase()
    while (!faseConcluida && !falhou) {
        pause(100)
    }
    estado = 2
    if (falhou) {
        music.stopAllSounds()
        limparTudo()
        game.splash("Não desista!", "Deus te dá forças!")
        info.setLife(5)
        info.setScore(pontosInicioFase)
    } else {
        comemorarFase()
        cenaDepoisDaFase()
        fase += 1
    }
    
}
cenaFinalJesus()
creditos()
game.setGameOverMessage(true, "DEUS ESTÁ COM VOCÊ!")
game.gameOver(true)
