# =============================================================
# BRAINROTS DA FÉ  —  Leviatan Studios
# Jogo para MakeCode Arcade (compatível com o editor de Blocos)
# Cole este código na aba JavaScript e depois clique em Blocos
# =============================================================
@namespace
class SpriteKind:
    Duvida = SpriteKind.create()
    Coletavel = SpriteKind.create()
    Chefe = SpriteKind.create()
    Pomba = SpriteKind.create()
    Vida = SpriteKind.create()
    Cenario = SpriteKind.create()
    Alvo = SpriteKind.create()
    Seguidor = SpriteKind.create()
    Barra = SpriteKind.create()
    Semente = SpriteKind.create()
    Passaro = SpriteKind.create()
    Aviso = SpriteKind.create()
    Muro = SpriteKind.create()
    Perigo = SpriteKind.create()
    Animal = SpriteKind.create()
    Destino = SpriteKind.create()
    Poco = SpriteKind.create()
    Viajante = SpriteKind.create()
# ------------------------------------------------------------
# FUNÇÕES GERAIS
# ------------------------------------------------------------
def ehChefe(numeroFase: number):
    return numeroFase == 5 or numeroFase == 10 or numeroFase == 15 or numeroFase == 16
def limparTudo():
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Duvida)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Coletavel)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Chefe)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Pomba)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Vida)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Cenario)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Alvo)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Seguidor)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Barra)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Semente)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Passaro)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Aviso)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Muro)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Perigo)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Animal)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Destino)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Poco)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Viajante)
    info.stop_countdown()
    effects.star_field.end_screen_effect()
def desenharSol():
    fundo.fill_rect(126, 10, 20, 20, 5)
    fundo.fill_rect(122, 14, 28, 12, 5)
    fundo.fill_rect(130, 6, 12, 28, 5)
    fundo.fill_rect(130, 14, 12, 12, 4)
def desenharFundo(ceu: number, faixa: number, chao: number, decoracao: number):
    global fundo, posX, posY
    fundo = image.create(160, 120)
    fundo.fill(ceu)
    fundo.fill_rect(0, 70, 160, 12, faixa)
    fundo.fill_rect(0, 82, 160, 38, chao)
    if decoracao == 1:
        desenharSol()
    elif decoracao == 2:
        for indiceEstrela in range(70):
            if Math.percent_chance(50):
                fundo.set_pixel(randint(0, 159), randint(0, 68), 1)
            else:
                fundo.set_pixel(randint(0, 159), randint(0, 68), 5)
        fundo.fill_rect(130, 12, 12, 12, 1)
        fundo.fill_rect(135, 10, 10, 11, ceu)
    elif decoracao == 3:
        for linhaOnda in range(5):
            for colunaOnda in range(10):
                fundo.fill_rect(colunaOnda * 16 + linhaOnda % 2 * 8,
                    86 + linhaOnda * 7,
                    6,
                    1,
                    9)
    elif decoracao == 4:
        for indiceDuna in range(5):
            fundo.fill_rect(indiceDuna * 34, 64 + indiceDuna % 2 * 3, 28, 8, 4)
        desenharSol()
    elif decoracao == 5:
        for indiceFlor in range(40):
            posX = randint(2, 157)
            posY = randint(86, 116)
            if Math.percent_chance(50):
                fundo.set_pixel(posX, posY, 3)
            else:
                fundo.set_pixel(posX, posY, 5)
            fundo.set_pixel(posX, posY + 1, 6)
        desenharSol()
    elif decoracao == 6:
        for indiceNuvem in range(5):
            posX = randint(0, 136)
            posY = randint(10, 50)
            fundo.fill_rect(posX, posY, 24, 6, 1)
            fundo.fill_rect(posX + 5, posY - 4, 12, 5, 1)
    elif decoracao == 7:
        for indiceTorre in range(4):
            fundo.fill_rect(10 + indiceTorre * 40, 36, 22, 34, 13)
            fundo.fill_rect(10 + indiceTorre * 40, 31, 6, 5, 13)
            fundo.fill_rect(18 + indiceTorre * 40, 31, 6, 5, 13)
            fundo.fill_rect(26 + indiceTorre * 40, 31, 6, 5, 13)
            fundo.fill_rect(18 + indiceTorre * 40, 50, 6, 10, 14)
    elif decoracao == 8:
        for indiceSulco in range(6):
            fundo.fill_rect(0, 86 + indiceSulco * 6, 160, 2, 12)
        desenharSol()
    scene.set_background_image(fundo)
def prepararCenario():
    if fase == 1:
        desenharFundo(9, 4, 5, 1)
    elif fase == 2:
        desenharFundo(9, 6, 8, 3)
    elif fase == 3:
        desenharFundo(9, 8, 8, 3)
    elif fase == 4:
        desenharFundo(9, 7, 7, 6)
    elif fase == 5:
        desenharFundo(10, 12, 12, 6)
    elif fase == 6:
        desenharFundo(12, 14, 13, 2)
    elif fase == 7:
        desenharFundo(4, 14, 13, 1)
    elif fase == 8:
        desenharFundo(9, 4, 13, 4)
    elif fase == 9:
        desenharFundo(9, 7, 7, 5)
    elif fase == 10:
        desenharFundo(3, 14, 4, 7)
    elif fase == 11:
        desenharFundo(12, 11, 8, 3)
    elif fase == 12:
        desenharFundo(9, 1, 9, 6)
    elif fase == 13:
        desenharFundo(4, 13, 13, 4)
    elif fase == 14:
        desenharFundo(9, 14, 14, 8)
    elif fase == 15:
        desenharFundo(10, 6, 7, 2)
    else:
        desenharFundo(15, 12, 12, 2)
    if fase == 6 or fase == 15 or fase == 16:
        effects.star_field.start_screen_effect()
def tocarMusica(numeroMusica: number):
    music.stop_all_sounds()
    if numeroMusica == 0:
        music.play(music.string_playable("C5 G E G A G E C ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif numeroMusica == 1:
        music.play(music.string_playable("E G A G C5 A G E ", 150),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif numeroMusica == 2:
        music.play(music.string_playable("G A B C5 B A G E ", 160),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif numeroMusica == 3:
        music.play(music.string_playable("C E G C5 G E D F ", 190),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif numeroMusica == 4:
        music.play(music.string_playable("C D E - E F G - ", 100),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    else:
        music.play(music.string_playable("G E C E G C5 B C5 ", 110),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
# ------------------------------------------------------------
# JOGADOR
# ------------------------------------------------------------
def criarJogador():
    global jogador, dirX, dirY
    jogador = sprites.create(imgHeroi, SpriteKind.player)
    jogador.set_position(80, 96)
    jogador.set_stay_in_screen(True)
    jogador.z = 10
    controller.move_sprite(jogador, velocidade, velocidade)
    dirX = 1
    dirY = 0
def atirar():
    global ultimoTiro, velTiroX, velTiroY, distX, distY, distancia, tiro
    if game.runtime() - ultimoTiro >= cadencia:
        ultimoTiro = game.runtime()
        velTiroX = dirX * 150
        velTiroY = dirY * 150
        if ehChefe(fase):
            distX = chefe.x - jogador.x
            distY = chefe.y - jogador.y
            distancia = Math.sqrt(distX * distX + distY * distY)
            if distancia > 0:
                velTiroX = distX / distancia * 150
                velTiroY = distY / distancia * 150
        if velTiroX == 0 and velTiroY == 0:
            velTiroX = 150
        tiro = sprites.create_projectile_from_sprite(imgCoracao, jogador, velTiroX, velTiroY)
        if personagem == 0:
            tiro.scale = 1.5
        music.play(music.melody_playable(music.pew_pew),
            music.PlaybackMode.IN_BACKGROUND)
def plantarSemente():
    global ultimoTiro, novaSemente
    if len(sprites.all_of_kind(SpriteKind.Semente)) < 10 and game.runtime() - ultimoTiro >= 400:
        ultimoTiro = game.runtime()
        novaSemente = sprites.create(imgSemente, SpriteKind.Semente)
        novaSemente.set_position(jogador.x, jogador.y + 8)
        novaSemente.z = 1
        novaSemente.lifespan = 5000
        music.play(music.melody_playable(music.knock),
            music.PlaybackMode.IN_BACKGROUND)
def tomarDano():
    global fimInvencivel, pisoAmor, amor
    if estado == 1 and game.runtime() >= fimInvencivel:
        fimInvencivel = game.runtime() + 1500
        info.change_life_by(-1)
        scene.camera_shake(3, 300)
        jogador.say_text("Opa!", 500, False)
        music.play(music.melody_playable(music.power_down),
            music.PlaybackMode.IN_BACKGROUND)
        if ehChefe(fase):
            pisoAmor = Math.idiv(amorMax * (etapaChefe - 1), 3)
            amor = max(pisoAmor, amor - 5)
            atualizarBarra()
def virarPomba(alvoPomba: Sprite):
    global pomba
    pomba = sprites.create(imgPomba, SpriteKind.Pomba)
    pomba.set_position(alvoPomba.x, alvoPomba.y)
    pomba.set_velocity(randint(-25, 25), -60)
    pomba.lifespan = 2500
    alvoPomba.destroy()
# ------------------------------------------------------------
# CRIADORES DE OBJETOS
# ------------------------------------------------------------
def criarColetavel(imagemItem: Image, x: number, y: number, vx: number, vy: number):
    global item
    item = sprites.create(imagemItem, SpriteKind.Coletavel)
    item.set_position(x, y)
    item.set_velocity(vx, vy)
    if vx != 0 or vy != 0:
        item.set_flag(SpriteFlag.AUTO_DESTROY, True)
    return item
def criarPerigo(imagemPerigo: Image, x2: number, y2: number, vx2: number, vy2: number):
    global perigo
    perigo = sprites.create(imagemPerigo, SpriteKind.Perigo)
    perigo.set_position(x2, y2)
    perigo.set_velocity(vx2, vy2)
    if vx2 != 0 or vy2 != 0:
        perigo.set_flag(SpriteFlag.AUTO_DESTROY, True)
    return perigo
def criarDuvidaLateral(velocidadeNuvem: number):
    global nuvem
    nuvem = sprites.create(imgDuvida, SpriteKind.Duvida)
    if Math.percent_chance(50):
        nuvem.set_position(0, randint(24, 110))
        nuvem.vx = velocidadeNuvem
    else:
        nuvem.set_position(160, randint(24, 110))
        nuvem.vx = 0 - velocidadeNuvem
    nuvem.vy = randint(-10, 10)
    nuvem.set_flag(SpriteFlag.AUTO_DESTROY, True)
def criarDuvidaQuicando(imagemQuica: Image, velocidadeQuica: number):
    global nuvem
    nuvem = sprites.create(imagemQuica, SpriteKind.Duvida)
    nuvem.set_position(randint(10, 150), 10)
    if abs(nuvem.x - jogador.x) < 30:
        nuvem.x = 160 - nuvem.x
    nuvem.set_velocity(randint(0 - velocidadeQuica, velocidadeQuica),
        randint(Math.idiv(velocidadeQuica, 2), velocidadeQuica))
    nuvem.set_bounce_on_wall(True)
def lancarDuvida(imagemLancada: Image, x3: number, y3: number, vx3: number, vy3: number):
    global nuvem
    nuvem = sprites.create(imagemLancada, SpriteKind.Duvida)
    nuvem.set_position(x3, y3)
    nuvem.set_velocity(vx3, vy3)
    nuvem.set_flag(SpriteFlag.AUTO_DESTROY, True)
def criarVida():
    global coracaoExtra
    coracaoExtra = sprites.create(imgVida, SpriteKind.Vida)
    coracaoExtra.set_position(randint(20, 140), randint(30, 100))
    coracaoExtra.lifespan = 8000
    coracaoExtra.start_effect(effects.halo, 8000)
def criarAnimal(imagemAnimal: Image, x4: number, y4: number):
    global alvo
    alvo = sprites.create(imagemAnimal, SpriteKind.Animal)
    alvo.set_position(x4, y4)
    alvo.set_velocity(randint(-20, 20), randint(-20, 20))
    alvo.set_bounce_on_wall(True)
def criarEstrela():
    global item
    item = criarColetavel(imgEstrela, randint(15, 145), randint(22, 110), 0, 0)
    item.start_effect(effects.halo, 1500)
def construirMuros():
    global tijolo
    for indiceMuro in range(10):
        tijolo = sprites.create(imgMuro, SpriteKind.Muro)
        tijolo.set_position(8 + indiceMuro * 16, 22)
        tijolo.z = -1
def derrubarMuro():
    global listaMuros, tijolo, horaReconstruir
    listaMuros = sprites.all_of_kind(SpriteKind.Muro)
    if len(listaMuros) > 0:
        tijolo = listaMuros[randint(0, len(listaMuros) - 1)]
        tijolo.set_kind(SpriteKind.Cenario)
        tijolo.vy = 70
        tijolo.set_flag(SpriteFlag.AUTO_DESTROY, True)
        scene.camera_shake(2, 200)
    if len(sprites.all_of_kind(SpriteKind.Muro)) == 0 and horaReconstruir == 0:
        info.change_score_by(50)
        jogador.say_text("As muralhas caíram!", 1500, False)
        music.play(music.melody_playable(music.power_up),
            music.PlaybackMode.IN_BACKGROUND)
        horaReconstruir = game.runtime() + 3000
def posicionarEspinhos():
    global posX, posY
    sprites.destroy_all_sprites_of_kind(SpriteKind.Perigo)
    for indiceEspinho in range(4):
        if Math.percent_chance(50):
            posX = randint(18, 48)
        else:
            posX = randint(112, 142)
        posY = randint(22, 106)
        if abs(posX - jogador.x) < 20 and abs(posY - jogador.y) < 20:
            posY = 120 - posY
        criarPerigo(imgEspinho, posX, posY, 0, 0)
# ------------------------------------------------------------
# FASES
# ------------------------------------------------------------
def montarFase():
    global alvo, horaReconstruir
    if fase == 4:
        alvo = sprites.create(imgArca, SpriteKind.Destino)
        alvo.set_position(22, 64)
    elif fase == 5:
        criarChefe(imgGigante, 300)
    elif fase == 6:
        criarEstrela()
    elif fase == 7:
        horaReconstruir = 0
        construirMuros()
    elif fase == 9:
        alvo = sprites.create(imgCercado, SpriteKind.Destino)
        alvo.set_position(80, 64)
        posicionarEspinhos()
    elif fase == 10:
        criarChefe(imgRei, 330)
    elif fase == 13:
        alvo = sprites.create(imgPoco, SpriteKind.Poco)
        alvo.set_position(20, 64)
    elif fase == 15:
        criarChefe(imgDragao, 360)
    elif fase == 16:
        criarChefe(imgNuvemFinal, 420)
def logicaFaseNormal():
    global enfeite, nuvem, item, horaReconstruir, aviso, alvo, posY, listaSementes, passarinho
    if fase == 1:
        if tick % 3 == 0:
            criarColetavel(imgPao, randint(10, 150), 0, 0, randint(30, 45) + nivel * 5)
        if tick % max(4, 12 - nivel * 2) == 0:
            criarDuvidaLateral(40 + nivel * 8)
    elif fase == 2:
        if tick % 4 == 0:
            if Math.percent_chance(50):
                criarColetavel(imgPeixe, 0, randint(30, 110), 40 + nivel * 5, 0)
            else:
                criarColetavel(imgPeixeEsq, 160, randint(30, 110), 0 - (40 + nivel * 5), 0)
        if tick % 8 == 0 and len(sprites.all_of_kind(SpriteKind.Duvida)) < 2 + nivel:
            criarDuvidaQuicando(imgDuvida, 35 + nivel * 6)
    elif fase == 3:
        if tick % 2 == 0:
            enfeite = sprites.create(imgOnda, SpriteKind.Cenario)
            enfeite.set_position(160, randint(20, 116))
            enfeite.vx = -50
            enfeite.z = -5
            enfeite.set_flag(SpriteFlag.AUTO_DESTROY, True)
        if tick % max(3, 8 - nivel) == 0:
            criarPerigo(imgRocha, 160, randint(20, 112), 0 - (55 + nivel * 10), 0)
        if tick % 5 == 0:
            criarColetavel(imgGota, 160, randint(20, 112), -50, 0)
        if tick % 20 == 0:
            criarDuvidaLateral(45 + nivel * 5)
    elif fase == 4:
        if tick % 10 == 0 and len(sprites.all_of_kind(SpriteKind.Animal)) + len(sprites.all_of_kind(SpriteKind.Seguidor)) < 4:
            if Math.percent_chance(50):
                criarAnimal(imgOvelha, randint(100, 150), randint(25, 110))
            else:
                criarAnimal(imgPato, randint(100, 150), randint(25, 110))
        if tick % max(5, 14 - nivel * 2) == 0:
            criarDuvidaLateral(35 + nivel * 8)
    elif fase == 6:
        if tick % 12 == 0 and len(sprites.all_of_kind(SpriteKind.Duvida)) < 1 + nivel:
            nuvem = sprites.create(imgDuvida, SpriteKind.Duvida)
            if Math.percent_chance(50):
                nuvem.set_position(6, 6)
            else:
                nuvem.set_position(154, 6)
            nuvem.follow(jogador, 20 + nivel * 6)
    elif fase == 7:
        if tick % 6 == 0 and len(sprites.all_of_kind(SpriteKind.Coletavel)) < 2:
            item = criarColetavel(imgTrombeta, randint(15, 145), randint(45, 110), 0, 0)
            item.lifespan = 9000
        if tick % max(4, 10 - nivel * 2) == 0:
            if Math.percent_chance(50):
                criarPerigo(imgRocha, 0, randint(45, 112), 50 + nivel * 10, 0)
            else:
                criarPerigo(imgRocha, 160, randint(45, 112), 0 - (50 + nivel * 10), 0)
        if horaReconstruir > 0 and game.runtime() > horaReconstruir:
            horaReconstruir = 0
            construirMuros()
    elif fase == 8:
        if tick % 2 == 0:
            criarColetavel(imgMana, randint(8, 152), 0, 0, randint(25, 40))
        if tick % 12 == 0:
            criarColetavel(imgGota, randint(8, 152), 0, 0, 35)
        if tick % 10 == 0 and len(sprites.all_of_kind(SpriteKind.Duvida)) < 2 + nivel:
            criarDuvidaQuicando(imgTornado, 40 + nivel * 8)
    elif fase == 9:
        if tick % 8 == 0 and len(sprites.all_of_kind(SpriteKind.Animal)) + len(sprites.all_of_kind(SpriteKind.Seguidor)) < 4:
            if Math.percent_chance(50):
                criarAnimal(imgOvelha, 12, randint(25, 110))
            else:
                criarAnimal(imgOvelha, 148, randint(25, 110))
        if tick % 16 == 0 and len(sprites.all_of_kind(SpriteKind.Duvida)) < 5 + Math.idiv(nivel, 2):
            criarDuvidaLateral(30 + nivel * 6)
    elif fase == 11:
        for indiceChuva in range(3):
            enfeite = sprites.create(imgChuva, SpriteKind.Cenario)
            enfeite.set_position(randint(0, 170), 0)
            enfeite.set_velocity(-25, 160)
            enfeite.z = -5
            enfeite.set_flag(SpriteFlag.AUTO_DESTROY, True)
        if tick % max(2, 6 - nivel) == 0:
            aviso = sprites.create(imgAviso, SpriteKind.Aviso)
            if Math.percent_chance(35):
                aviso.set_position(jogador.x, jogador.y + 6)
            else:
                aviso.set_position(randint(10, 150), randint(25, 112))
            aviso.lifespan = 900
            aviso.z = -1
        if tick % 6 == 0:
            if Math.percent_chance(50):
                criarColetavel(imgPomba, 0, randint(30, 100), 30, 0)
            else:
                criarColetavel(imgPomba, 160, randint(30, 100), -30, 0)
    elif fase == 12:
        if tick % 4 == 0:
            enfeite = sprites.create(imgNuvemBranca, SpriteKind.Cenario)
            enfeite.set_position(randint(0, 160), 0)
            enfeite.vy = 30
            enfeite.z = -5
            enfeite.set_flag(SpriteFlag.AUTO_DESTROY, True)
        if tick % 3 == 0:
            criarColetavel(imgNota, 160, randint(20, 110), -40, 0)
        if tick % max(4, 10 - nivel) == 0:
            nuvem = sprites.create(imgDuvida, SpriteKind.Duvida)
            nuvem.set_position(160, randint(35, 95))
            nuvem.vx = 0 - (40 + nivel * 8)
            nuvem.set_flag(SpriteFlag.AUTO_DESTROY, True)
    elif fase == 13:
        if tick % 12 == 0 and len(sprites.all_of_kind(SpriteKind.Viajante)) < 3:
            alvo = sprites.create(imgViajante, SpriteKind.Viajante)
            alvo.set_position(randint(60, 150), randint(22, 110))
            alvo.say_text("Tenho sede...", 2000, False)
        if tick % 10 == 0 and len(sprites.all_of_kind(SpriteKind.Duvida)) < 2 + nivel:
            criarDuvidaQuicando(imgDuvida, 35 + nivel * 6)
    elif fase == 14:
        if tick % max(6, 14 - nivel * 2) == 0:
            posY = randint(30, 110)
            listaSementes = sprites.all_of_kind(SpriteKind.Semente)
            if len(listaSementes) > 0:
                posY = listaSementes[randint(0, len(listaSementes) - 1)].y
            if Math.percent_chance(50):
                passarinho = sprites.create(imgPassaro, SpriteKind.Passaro)
                passarinho.set_position(0, posY)
                passarinho.vx = 40 + nivel * 5
            else:
                passarinho = sprites.create(imgPassaroEsq, SpriteKind.Passaro)
                passarinho.set_position(160, posY)
                passarinho.vx = 0 - (40 + nivel * 5)
            passarinho.set_flag(SpriteFlag.AUTO_DESTROY, True)
        if tick % 16 == 0 and len(sprites.all_of_kind(SpriteKind.Duvida)) < 1 + Math.idiv(nivel, 2):
            criarDuvidaQuicando(imgDuvida, 30)
# ------------------------------------------------------------
# CHEFÕES
# ------------------------------------------------------------
def criarChefe(imagemChefe: Image, maximo: number):
    global chefe, amor, amorMax, escudo, etapaChefe, barra
    chefe = sprites.create(imagemChefe, SpriteKind.Chefe)
    chefe.set_position(80, 32)
    chefe.set_bounce_on_wall(True)
    chefe.set_velocity(35, 0)
    chefe.z = 5
    amor = 0
    amorMax = maximo
    escudo = False
    etapaChefe = 1
    barra = sprites.create(image.create(62, 7), SpriteKind.Barra)
    barra.set_position(80, 113)
    barra.z = 50
    atualizarBarra()
def atualizarBarra():
    global larguraBarra
    barra.image.fill(15)
    barra.image.draw_rect(0, 0, 62, 7, 1)
    larguraBarra = min(58, Math.idiv(amor * 58, amorMax))
    barra.image.fill_rect(2, 2, larguraBarra, 3, 2)
def imagemDoChefe():
    if fase == 5:
        return imgGigante
    elif fase == 10:
        return imgRei
    elif fase == 15:
        return imgDragao
    return imgNuvemFinal
def nomeDoChefe():
    if fase == 5:
        return "Gigante Resmungão"
    elif fase == 10:
        return "Rei Orgulhoso"
    elif fase == 15:
        return "Dragão Dorminhoco"
    return "Nuvem da Dúvida"
def rajadaCircular(imagemRajada: Image, quantidade: number, velocidadeRajada: number):
    global angulo
    indiceRajada = 0
    while indiceRajada <= quantidade - 1:
        angulo = indiceRajada * 2 * Math.PI / quantidade + tick / 7
        lancarDuvida(imagemRajada,
            chefe.x,
            chefe.y,
            Math.cos(angulo) * velocidadeRajada,
            Math.sin(angulo) * velocidadeRajada)
        indiceRajada += 1
def tiroMirado(imagemMira: Image, velocidadeMira: number):
    global distX, distY, distancia
    distX = jogador.x - chefe.x
    distY = jogador.y - chefe.y
    distancia = max(1, Math.sqrt(distX * distX + distY * distY))
    lancarDuvida(imagemMira,
        chefe.x,
        chefe.y,
        distX / distancia * velocidadeMira,
        distY / distancia * velocidadeMira)
def logicaChefe():
    global novaEtapa, etapaChefe, escudo, padraoAtaque
    novaEtapa = 1
    if amor * 3 >= amorMax * 2:
        novaEtapa = 3
    elif amor * 3 >= amorMax:
        novaEtapa = 2
    if novaEtapa > etapaChefe:
        etapaChefe = novaEtapa
        if etapaChefe == 2:
            chefe.say_text("O que é isso no meu peito?!", 2000, False)
        else:
            chefe.say_text("Não consigo resistir!", 2000, False)
        music.play(music.melody_playable(music.magic_wand),
            music.PlaybackMode.IN_BACKGROUND)
        scene.camera_shake(3, 400)
    if escudo and game.runtime() > fimEscudo:
        escudo = False
    if chefe.vx >= 0:
        chefe.vx = 25 + etapaChefe * 12
    else:
        chefe.vx = 0 - (25 + etapaChefe * 12)
    if fase == 5:
        if tick % (9 - etapaChefe * 2) == 0:
            for lado in range(-1, 2):
                lancarDuvida(imgDuvida,
                    chefe.x + lado * 12,
                    chefe.y + 14,
                    lado * 30,
                    45 + etapaChefe * 10)
    elif fase == 10:
        if tick % 12 == 0:
            chefe.set_position(randint(25, 135), randint(22, 50))
            chefe.start_effect(effects.halo, 300)
        if tick % (8 - etapaChefe) == 0:
            rajadaCircular(imgCoroa, 4 + etapaChefe * 2, 45 + etapaChefe * 8)
    elif fase == 15:
        chefe.vx = chefe.vx / 2
        if tick % (7 - etapaChefe) == 0:
            lancarDuvida(imgZzz,
                chefe.x,
                chefe.y + 10,
                randint(-40, 40),
                35 + etapaChefe * 8)
        if tick % 24 == 0:
            chefe.say_text("Uaaaah!", 800, False)
            for leque in range(-3, 4):
                lancarDuvida(imgZzz, chefe.x, chefe.y + 10, leque * 18, 40)
    else:
        padraoAtaque = Math.idiv(tick, 16) % 3
        if padraoAtaque == 0 and tick % (6 - etapaChefe) == 0:
            lancarDuvida(imgDuvida, randint(8, 152), 0, 0, 50 + etapaChefe * 12)
            lancarDuvida(imgDuvida, randint(8, 152), 0, 0, 50 + etapaChefe * 12)
        if padraoAtaque == 1 and tick % (5 - etapaChefe) == 0:
            tiroMirado(imgDuvida, 55 + etapaChefe * 12)
        if padraoAtaque == 2 and tick % (8 - etapaChefe) == 0:
            rajadaCircular(imgDuvida, 6 + etapaChefe * 2, 50 + etapaChefe * 10)
# ------------------------------------------------------------
# FLUXO DAS FASES
# ------------------------------------------------------------
def iniciarFase():
    global estado, faseConcluida, falhou, tempoFase, tick, nivel, carregando, fimInvencivel
    estado = 2
    limparTudo()
    faseConcluida = False
    falhou = False
    tempoFase = 0
    tick = 0
    nivel = 0
    carregando = 0
    fimInvencivel = 0
    prepararCenario()
    criarJogador()
    controller.move_sprite(jogador, 0, 0)
    if ehChefe(fase):
        game.splash("Fase " + str(fase) + " - CHEFÃO!", titulos[fase - 1])
    else:
        game.splash("Fase " + str(fase), titulos[fase - 1])
    game.show_long_text(instrucoes[fase - 1], DialogLayout.BOTTOM)
    montarFase()
    if ehChefe(fase):
        chefe.say_text(str(nomeDoChefe()) + "!", 1500, False)
        tocarMusica(3)
    else:
        info.start_countdown(DURACAO_FASE)
        tocarMusica(1 + fase % 2)
    pause(300)
    controller.move_sprite(jogador, velocidade, velocidade)
    estado = 1
def comemorarFase():
    info.stop_countdown()
    controller.move_sprite(jogador, 0, 0)
    jogador.set_flag(SpriteFlag.INVISIBLE, False)
    for nuvemRestante in sprites.all_of_kind(SpriteKind.Duvida):
        virarPomba(nuvemRestante)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Perigo)
    if ehChefe(fase):
        chefe.set_velocity(0, 0)
        chefe.start_effect(effects.hearts, 2000)
        chefe.say_text("Que amor é esse?!", 2000, False)
    jogador.start_effect(effects.smiles, 1500)
    music.stop_all_sounds()
    music.play(music.melody_playable(music.power_up),
        music.PlaybackMode.UNTIL_DONE)
    pause(1500)
    game.splash("Fase concluída!", "Pontos: " + str(info.score()))
# ------------------------------------------------------------
# CUTSCENES
# ------------------------------------------------------------
def falar(quem: str, texto: str):
    game.show_long_text(quem + ": " + texto, DialogLayout.BOTTOM)
def montarCena():
    global atorHeroi, atorAnjo
    limparTudo()
    prepararCenario()
    atorHeroi = sprites.create(imgHeroi, SpriteKind.Cenario)
    atorHeroi.set_position(-10, 42)
    atorHeroi.scale = 2
    atorHeroi.vx = 60
    atorAnjo = sprites.create(imgAnjo, SpriteKind.Cenario)
    atorAnjo.set_position(120, -20)
    atorAnjo.scale = 2
    atorAnjo.vy = 60
    atorAnjo.start_effect(effects.halo, 1500)
    pause(1000)
    atorHeroi.vx = 0
    atorAnjo.vy = 0
def cenaDepoisDaFase():
    global estado, atorExtra
    estado = 2
    tocarMusica(4)
    montarCena()
    if ehChefe(fase):
        atorAnjo.scale = 1
        atorAnjo.set_position(146, 16)
        atorExtra = sprites.create(imagemDoChefe(), SpriteKind.Cenario)
        atorExtra.set_position(112, 46)
        atorExtra.start_effect(effects.hearts, 3000)
    if fase == 1:
        falar("Anjo Gabriel",
            "Muito bem, " + nomeHeroi + "! Você juntou muitos pães!")
        falar(nomeHeroi, "Por que esses pães são tão importantes?")
        falar("Anjo Gabriel",
            "Jesus multiplicou cinco pães e dois peixes e alimentou mais de cinco mil pessoas! Ele cuida de quem tem fome.")
        falar(nomeHeroi, "Uau... eu nunca tinha ouvido falar de Jesus.")
        falar("Anjo Gabriel",
            "Então continue a jornada. Ele quer muito te conhecer!")
    elif fase == 2:
        falar(nomeHeroi, "Pesquei tanto peixe que a rede quase rasgou!")
        falar("Anjo Gabriel",
            "Foi assim com Pedro! Ele pescou a noite toda e não pegou nada. Mas quando obedeceu a Jesus, a rede encheu!")
        falar(nomeHeroi, "Então obedecer a Jesus traz coisas boas?")
        falar("Anjo Gabriel", "Sempre! Ele sabe o que é melhor para nós.")
    elif fase == 3:
        falar(nomeHeroi,
            "Eu andei sobre a água! Mas fiquei com medo das pedras...")
        falar("Anjo Gabriel",
            "Pedro também andou sobre as águas enquanto olhava para Jesus. Quando teve medo, Jesus estendeu a mão e o segurou.")
        falar(nomeHeroi,
            "Então quando eu tiver medo, posso olhar para Ele?")
        falar("Anjo Gabriel", "Isso mesmo! Ele nunca solta a sua mão.")
    elif fase == 4:
        falar(nomeHeroi, "Todos os bichinhos entraram na arca!")
        falar("Anjo Gabriel",
            "Noé confiou em Deus e construiu a arca, mesmo quando ninguém acreditava nele.")
        falar("Anjo Gabriel",
            "Depois do dilúvio, uma pombinha voltou com um raminho de oliveira: era sinal de paz e de um novo começo!")
        falar(nomeHeroi, "Eu também quero um novo começo!")
    elif fase == 5:
        falar("Gigante Resmungão",
            "Snif... ninguém nunca tinha jogado corações em mim. Eu só vivia resmungando...")
        falar(nomeHeroi,
            "Eu não quero brigar com você. Quero ser seu amigo!")
        falar("Anjo Gabriel",
            "Jesus ensinou a amar até quem é difícil de amar. O amor transforma corações!")
        falar("Gigante Resmungão",
            "Obrigado... acho que agora vou sorrir mais!")
    elif fase == 6:
        falar(nomeHeroi, "Segui a estrela e ela me trouxe até aqui!")
        falar("Anjo Gabriel",
            "Os Reis Magos seguiram uma estrela assim e encontraram o menino Jesus em Belém!")
        falar(nomeHeroi,
            "Deus usou uma estrela para guiar as pessoas até Ele?")
        falar("Anjo Gabriel",
            "Sim! E até hoje Ele guia quem procura por Ele.")
    elif fase == 7:
        falar(nomeHeroi, "As muralhas caíram só com o som das trombetas!")
        falar("Anjo Gabriel",
            "Josué e o povo obedeceram a Deus: deram voltas na cidade e tocaram as trombetas. Deus fez o resto!")
        falar(nomeHeroi, "Então com Deus nada é impossível!")
    elif fase == 8:
        falar(nomeHeroi, "Caiu comida do céu! E era gostosa!")
        falar("Anjo Gabriel",
            "No deserto, Deus mandou o maná todos os dias para o povo de Israel. Nunca faltou!")
        falar(nomeHeroi, "Deus cuida de mim todos os dias também?")
        falar("Anjo Gabriel", "Todos os dias, sem faltar nenhum!")
    elif fase == 9:
        falar(nomeHeroi, "Levei as ovelhinhas para o cercado!")
        falar("Anjo Gabriel",
            "Jesus disse: Eu sou o Bom Pastor. Se uma ovelha se perde, Ele vai buscar até encontrar.")
        falar(nomeHeroi, "Acho que eu era uma ovelhinha perdida...")
        falar("Anjo Gabriel", "E Ele veio te buscar!")
    elif fase == 10:
        falar("Rei Orgulhoso",
            "Eu achava que era o maior de todos... mas fiquei sozinho no meu castelo.")
        falar(nomeHeroi, "Ser grande não é ser melhor que os outros.")
        falar("Anjo Gabriel",
            "Jesus, o Rei dos reis, lavou os pés dos seus amigos. A verdadeira grandeza é servir com humildade.")
        falar("Rei Orgulhoso",
            "Vou guardar meu orgulho e ajudar as pessoas!")
    elif fase == 11:
        falar(nomeHeroi, "Que tempestade! Os raios caíam por todo lado!")
        falar("Anjo Gabriel",
            "Os discípulos também ficaram com medo num barco na tempestade. Jesus disse: Silêncio, aquiete-se! E tudo ficou calmo.")
        falar(nomeHeroi, "Jesus manda até no vento?")
        falar("Anjo Gabriel",
            "Sim! E Ele também pode acalmar as tempestades do seu coração.")
    elif fase == 12:
        falar(nomeHeroi, "Que músicas lindas lá no céu!")
        falar("Anjo Gabriel",
            "Jacó sonhou com uma escada que ia da terra até o céu, com anjos subindo e descendo.")
        falar("Anjo Gabriel",
            "E Deus disse a ele: Eu estou com você e vou te guardar por onde você for.")
        falar(nomeHeroi, "Que promessa bonita!")
    elif fase == 13:
        falar(nomeHeroi, "Dei água para todo mundo que tinha sede!")
        falar("Anjo Gabriel",
            "Jesus contou a história do Bom Samaritano, que parou para ajudar um homem que precisava, mesmo sem conhecê-lo.")
        falar(nomeHeroi,
            "Então ajudar os outros é um jeito de mostrar amor?")
        falar("Anjo Gabriel",
            "Exatamente! Amar o próximo como a si mesmo.")
    elif fase == 14:
        falar(nomeHeroi, "Plantei sementes e nasceram flores!")
        falar("Anjo Gabriel",
            "Jesus contou sobre um semeador. A semente que cai em terra boa cresce e dá muitos frutos.")
        falar("Anjo Gabriel",
            "A Palavra de Deus é como uma semente. Seu coração está virando terra boa!")
        falar(nomeHeroi, "Sinto algo novo crescendo dentro de mim...")
    elif fase == 15:
        falar("Dragão Dorminhoco",
            "Uaaah... eu só queria dormir e não fazer nada o dia inteiro...")
        falar(nomeHeroi, "Acorda, amigo! Tem tanta coisa boa para fazer!")
        falar("Anjo Gabriel",
            "A Bíblia diz: olhe a formiguinha, ela trabalha com alegria. Deus nos deu energia para fazer o bem!")
        falar("Dragão Dorminhoco",
            "Tá bom... vou acordar e ajudar quem precisa!")
        falar("Anjo Gabriel",
            "Agora falta só o último desafio: a Grande Nuvem da Dúvida.")
    else:
        desenharFundo(9, 5, 7, 6)
        effects.star_field.end_screen_effect()
        falar("Nuvem da Dúvida",
            "Eu dizia para todo mundo que Deus não ligava para eles... mas eu estava errada!")
        falar(nomeHeroi, "Deus ama até você, Nuvem!")
        falar("Anjo Gabriel",
            "Tomé também duvidou, mas Jesus foi até ele com paciência. Felizes os que creem!")
        falar("Nuvem da Dúvida",
            "Acho que agora eu também quero acreditar...")
        falar("Anjo Gabriel",
            nomeHeroi + ", você venceu todas as dúvidas. Agora alguém muito especial quer falar com você...")
    atorHeroi.start_effect(effects.smiles, 1000)
    pause(1000)
def cenaAbertura():
    global estado, atorHeroi, atorAnjo
    estado = 2
    limparTudo()
    desenharFundo(9, 7, 7, 6)
    tocarMusica(4)
    game.splash("Leviatan Studios", "apresenta")
    atorHeroi = sprites.create(imgHeroi, SpriteKind.Cenario)
    atorHeroi.set_position(-10, 42)
    atorHeroi.scale = 2
    atorHeroi.vx = 60
    pause(1000)
    atorHeroi.vx = 0
    if personagem == 0:
        falar(nomeHeroi,
            "Tung tung tung! Eu toco meu tambor de madrugada para acordar todo mundo... mas por dentro me sinto vazio.")
    elif personagem == 1:
        falar(nomeHeroi,
            "Eu danço o dia inteiro com minha xícara de cappuccino... mas sinto que falta alguma coisa no meu coração.")
    else:
        falar(nomeHeroi,
            "Tralalero tralala! Sou o tubarão de tênis mais rápido do mundo! Mas correr tanto não enche meu coração...")
    atorAnjo = sprites.create(imgAnjo, SpriteKind.Cenario)
    atorAnjo.set_position(120, -20)
    atorAnjo.scale = 2
    atorAnjo.vy = 60
    atorAnjo.start_effect(effects.halo, 1500)
    music.play(music.melody_playable(music.magic_wand),
        music.PlaybackMode.IN_BACKGROUND)
    pause(1000)
    atorAnjo.vy = 0
    falar("Anjo Gabriel",
        "Olá, " + nomeHeroi + "! Eu sou o Anjo Gabriel. Vim te contar uma notícia muito boa!")
    falar(nomeHeroi, "Uma notícia boa? Para mim?")
    falar("Anjo Gabriel",
        "Sim! Existe Alguém que te ama do jeito que você é. O nome Dele é Jesus!")
    falar(nomeHeroi, "Jesus? Quem é Ele? Eu queria muito conhecer!")
    falar("Anjo Gabriel",
        "Então venha comigo numa grande jornada! Mas cuidado: as nuvens da dúvida vão tentar te desanimar.")
    falar("Anjo Gabriel",
        "Aperte A para lançar corações de amor: eles transformam as dúvidas em pombinhas da paz! O botão B te dá um impulso rápido.")
    falar("Anjo Gabriel",
        "Você tem no máximo 5 vidas. Corações dourados devolvem uma vida!")
    falar(nomeHeroi, "Vamos nessa!")
def cenaFinalJesus():
    global estado, atorHeroi, atorJesus
    estado = 2
    limparTudo()
    desenharFundo(9, 5, 7, 6)
    tocarMusica(4)
    atorHeroi = sprites.create(imgHeroi, SpriteKind.Cenario)
    atorHeroi.set_position(-10, 48)
    atorHeroi.scale = 2
    atorHeroi.vx = 50
    pause(1000)
    atorHeroi.vx = 0
    atorJesus = sprites.create(imgJesus, SpriteKind.Cenario)
    atorJesus.set_position(115, -20)
    atorJesus.scale = 2
    atorJesus.vy = 34
    atorJesus.start_effect(effects.warm_radial, 3000)
    music.play(music.melody_playable(music.magic_wand),
        music.PlaybackMode.IN_BACKGROUND)
    pause(2000)
    atorJesus.vy = 0
    falar("Jesus",
        nomeHeroi + ", eu estive com você em cada passo dessa jornada.")
    falar(nomeHeroi,
        "Era o Senhor que me ajudava quando eu tinha medo?")
    falar("Jesus",
        "Sim. Quando você andou sobre as águas, quando a tempestade veio e quando a dúvida tentou te parar.")
    falar(nomeHeroi,
        "Mas eu sou só um brainrot meio esquisito... por que o Senhor me ama?")
    falar("Jesus",
        "Porque eu te criei com carinho. Não existe ninguém que eu não ame. Eu dei a minha vida por amor a você.")
    falar(nomeHeroi,
        "Eu quero seguir o Senhor para sempre! Quero ser seu amigo!")
    falar("Jesus",
        "Eu te recebo com alegria! Eu perdoo seus erros e faço de você uma nova criatura.")
    if personagem == 0:
        falar(nomeHeroi,
            "Antes eu batia meu tambor de madrugada... agora vou tocar louvores para o Senhor!")
    elif personagem == 1:
        falar(nomeHeroi,
            "Vou dançar de alegria para o Senhor todos os dias!")
    else:
        falar(nomeHeroi,
            "Vou correr e nadar pelo mundo contando para todos sobre o Senhor!")
    falar("Jesus",
        "E lembre: eu estarei com você todos os dias, até o fim dos tempos.")
    falar(nomeHeroi,
        "Obrigado, Jesus! Agora sei que nunca vou estar sozinho!")
    atorHeroi.start_effect(effects.hearts, 3000)
    atorJesus.start_effect(effects.warm_radial, 3000)
    music.play(music.melody_playable(music.power_up),
        music.PlaybackMode.UNTIL_DONE)
    game.show_long_text(nomeHeroi + " se converteu ao cristianismo!\n\nDeus estará sempre ao lado " + pronome + "!",
        DialogLayout.CENTER)
def creditos():
    global estado, listaDesfile, enfeite
    estado = 2
    limparTudo()
    desenharFundo(8, 9, 9, 2)
    tocarMusica(5)
    listaDesfile = [imgTung,
        imgBallerina,
        imgTralalero,
        imgAnjo,
        imgGigante,
        imgRei,
        imgDragao,
        imgNuvemFinal,
        imgJesus]
    for imagemDesfile in listaDesfile:
        enfeite = sprites.create(imagemDesfile, SpriteKind.Cenario)
        enfeite.set_position(176, 90)
        enfeite.vx = -45
        enfeite.lifespan = 6000
        pause(900)
    pause(4000)
    game.show_long_text("CRÉDITOS\n\nBRAINROTS DA FÉ\nUm jogo da Leviatan Studios\n\nDireção: Leviatan Studios\nRoteiro: Leviatan Studios\nArte e Personagens: Leviatan Studios\nProgramação: Leviatan Studios\nMúsica e Sons: Leviatan Studios\nTestes: Leviatan Studios\n\nFeito com MakeCode Arcade\n\nObrigado por jogar!\n© Leviatan Studios",
        DialogLayout.FULL)
    game.splash("Leviatan Studios", "Deus te abençoe!")
# ------------------------------------------------------------
# TELA INICIAL E SELEÇÃO
# ------------------------------------------------------------
def telaInicial():
    global estado, fundo, enfeite
    estado = 0
    limparTudo()
    fundo = image.create(160, 120)
    fundo.fill(8)
    fundo.fill_rect(0, 50, 160, 40, 9)
    for indiceLuz in range(8):
        fundo.draw_line(80, 40, indiceLuz * 23, 0, 5)
    fundo.fill_rect(0, 92, 160, 28, 7)
    fundo.fill_rect(36, 84, 88, 10, 7)
    fundo.fill_rect(54, 76, 52, 10, 7)
    fundo.fill_rect(75, 20, 10, 58, 5)
    fundo.fill_rect(64, 32, 32, 10, 5)
    fundo.fill_rect(77, 22, 6, 56, 14)
    fundo.fill_rect(66, 34, 28, 6, 14)
    scene.set_background_image(fundo)
    for indiceTitulo in range(3):
        enfeite = sprites.create(imgHerois[indiceTitulo], SpriteKind.Cenario)
        enfeite.set_position(24 + indiceTitulo * 56, 102)
    tocarMusica(0)
    pause(500)
    game.splash("BRAINROTS DA FÉ", "Leviatan Studios")
    game.splash("Aperte A para jogar!")
def moverCursor():
    for opcaoAtual in opcoes:
        opcaoAtual.scale = 1
    opcoes[selecionado].scale = 2
    cursor.set_position(opcoes[selecionado].x, opcoes[selecionado].y - 26)
    rotuloNome.say_text(nomes[selecionado], 100000, False)
    rotuloInfo.say_text(descricoes[selecionado], 100000, False)
    music.play(music.melody_playable(music.knock),
        music.PlaybackMode.IN_BACKGROUND)
def selecionarPersonagem():
    global estado, opcoes, enfeite, cursor, rotuloNome, rotuloInfo, selecionado, escolhido, personagem, velocidade, cadencia, forca, duracaoDash, pronome, nomeHeroi, imgHeroi, imgHeroiEsq
    estado = 2
    limparTudo()
    desenharFundo(10, 12, 12, 2)
    opcoes = []
    for indiceOpcao in range(3):
        enfeite = sprites.create(imgHerois[indiceOpcao], SpriteKind.Cenario)
        enfeite.set_position(30 + indiceOpcao * 50, 66)
        opcoes.append(enfeite)
    cursor = sprites.create(imgSeta, SpriteKind.Cenario)
    rotuloNome = sprites.create(image.create(1, 1), SpriteKind.Cenario)
    rotuloNome.set_position(80, 112)
    rotuloInfo = sprites.create(image.create(1, 1), SpriteKind.Cenario)
    rotuloInfo.set_position(80, 20)
    game.show_long_text("Escolha seu herói! Use as setas para os lados e aperte A.",
        DialogLayout.BOTTOM)
    selecionado = 0
    moverCursor()
    pause(300)
    escolhido = False
    estado = 3
    while not (escolhido):
        pause(50)
    estado = 2
    personagem = selecionado
    if personagem == 0:
        velocidade = 75
        cadencia = 500
        forca = 2
        duracaoDash = 250
        pronome = "dele"
    elif personagem == 1:
        velocidade = 100
        cadencia = 380
        forca = 1
        duracaoDash = 420
        pronome = "dela"
    else:
        velocidade = 88
        cadencia = 300
        forca = 1
        duracaoDash = 250
        pronome = "dele"
    nomeHeroi = nomes[personagem]
    imgHeroi = imgHerois[personagem]
    imgHeroiEsq = imgHeroi.clone()
    imgHeroiEsq.flip_x()
    opcoes[personagem].start_effect(effects.hearts, 1000)
    music.play(music.melody_playable(music.power_up),
        music.PlaybackMode.UNTIL_DONE)
    game.splash("Você escolheu:", nomeHeroi)
# ------------------------------------------------------------
# EVENTOS
# ------------------------------------------------------------

def on_left_pressed():
    global selecionado
    if estado == 3:
        selecionado = selecionado - 1
        if selecionado < 0:
            selecionado = 2
        moverCursor()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global selecionado
    if estado == 3:
        selecionado = selecionado + 1
        if selecionado > 2:
            selecionado = 0
        moverCursor()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_a_pressed():
    global escolhido
    if estado == 3:
        escolhido = True
    elif estado == 1:
        if fase == 14:
            plantarSemente()
        else:
            atirar()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_a_repeated():
    if estado == 1 and fase != 14:
        atirar()
controller.A.on_event(ControllerButtonEvent.REPEATED, on_a_repeated)

def on_b_pressed():
    global fimDash, proximoDash, fimInvencivel
    if estado == 1 and game.runtime() >= proximoDash:
        fimDash = game.runtime() + duracaoDash
        proximoDash = game.runtime() + 1200
        fimInvencivel = max(fimInvencivel, fimDash)
        jogador.start_effect(effects.trail, duracaoDash)
        music.play(music.melody_playable(music.jump_up),
            music.PlaybackMode.IN_BACKGROUND)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_countdown_end():
    global faseConcluida
    if estado == 1:
        faseConcluida = True
info.on_countdown_end(on_countdown_end)

def on_life_zero():
    global falhou
    if estado == 1:
        falhou = True
info.on_life_zero(on_life_zero)

def on_on_overlap(sprite, otherSprite):
    if estado == 1 and game.runtime() >= fimInvencivel:
        tomarDano()
        virarPomba(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.Duvida, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    tomarDano()
sprites.on_overlap(SpriteKind.player, SpriteKind.Perigo, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    tomarDano()
sprites.on_overlap(SpriteKind.player, SpriteKind.Chefe, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    sprite4.destroy()
    virarPomba(otherSprite4)
    info.change_score_by(10)
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Duvida, on_on_overlap4)

def on_on_overlap5(sprite5, otherSprite5):
    global amor, faseConcluida
    sprite5.destroy()
    if estado == 1:
        if escudo:
            otherSprite5.say_text("Não vou ouvir!", 400, False)
        else:
            amor += forca
            info.change_score_by(5)
            otherSprite5.start_effect(effects.hearts, 200)
            atualizarBarra()
            if amor >= amorMax:
                faseConcluida = True
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Chefe, on_on_overlap5)

def on_on_overlap6(sprite6, otherSprite6):
    if estado == 1:
        if fase == 6:
            info.change_score_by(20)
        else:
            info.change_score_by(10)
        otherSprite6.destroy(effects.spray, 100)
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.IN_BACKGROUND)
        if fase == 6:
            criarEstrela()
        elif fase == 7:
            derrubarMuro()
sprites.on_overlap(SpriteKind.player, SpriteKind.Coletavel, on_on_overlap6)

def on_on_overlap7(sprite7, otherSprite7):
    if info.life() < 5:
        info.change_life_by(1)
    else:
        info.change_score_by(50)
    otherSprite7.destroy()
    music.play(music.melody_playable(music.power_up),
        music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.player, SpriteKind.Vida, on_on_overlap7)

def on_on_overlap8(sprite8, otherSprite8):
    otherSprite8.set_kind(SpriteKind.Seguidor)
    otherSprite8.follow(jogador, 80)
    otherSprite8.say_text("Béé!", 600, False)
    music.play(music.melody_playable(music.knock),
        music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.player, SpriteKind.Animal, on_on_overlap8)

def on_on_overlap9(sprite9, otherSprite9):
    global carregando
    if estado == 1 and carregando == 0:
        carregando = 1
        jogador.say_text("Peguei água!", 800, False)
        music.play(music.melody_playable(music.jump_up),
            music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.player, SpriteKind.Poco, on_on_overlap9)

def on_on_overlap10(sprite10, otherSprite10):
    global carregando
    if estado == 1 and carregando == 1:
        carregando = 0
        info.change_score_by(30)
        otherSprite10.set_kind(SpriteKind.Cenario)
        otherSprite10.say_text("Obrigado! Deus te abençoe!", 1500, False)
        otherSprite10.vx = 40
        otherSprite10.set_flag(SpriteFlag.AUTO_DESTROY, True)
        otherSprite10.start_effect(effects.hearts, 800)
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.player, SpriteKind.Viajante, on_on_overlap10)

def on_on_overlap11(sprite11, otherSprite11):
    info.change_score_by(25)
    sprite11.destroy(effects.hearts, 300)
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.IN_BACKGROUND)
sprites.on_overlap(SpriteKind.Seguidor, SpriteKind.Destino, on_on_overlap11)

def on_on_overlap12(sprite12, otherSprite12):
    otherSprite12.set_kind(SpriteKind.Cenario)
    otherSprite12.destroy()
sprites.on_overlap(SpriteKind.Passaro, SpriteKind.Semente, on_on_overlap12)

def on_on_overlap13(sprite13, otherSprite13):
    otherSprite13.set_kind(SpriteKind.Cenario)
    otherSprite13.set_velocity(otherSprite13.vx, -90)
    otherSprite13.lifespan = 1500
    info.change_score_by(5)
    jogador.say_text("Xô, passarinho!", 600, False)
sprites.on_overlap(SpriteKind.player, SpriteKind.Passaro, on_on_overlap13)

def on_on_destroyed(sprite14):
    global florNova
    if estado == 1 and fase == 14:
        florNova = sprites.create(imgFlor, SpriteKind.Cenario)
        florNova.set_position(sprite14.x, sprite14.y - 3)
        florNova.z = 1
        florNova.lifespan = 40000
        florNova.start_effect(effects.hearts, 400)
        info.change_score_by(15)
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.IN_BACKGROUND)
sprites.on_destroyed(SpriteKind.Semente, on_on_destroyed)

def on_on_destroyed2(sprite15):
    global perigo
    if estado == 1 and fase == 11:
        perigo = criarPerigo(imgRaio, sprite15.x, sprite15.y - 6, 0, 0)
        perigo.lifespan = 500
        scene.camera_shake(2, 200)
        music.play(music.melody_playable(music.knock),
            music.PlaybackMode.IN_BACKGROUND)
sprites.on_destroyed(SpriteKind.Aviso, on_on_destroyed2)

def on_on_update():
    global dirX, dirY
    if estado == 1:
        if controller.left.is_pressed():
            dirX = -1
            jogador.set_image(imgHeroiEsq)
        elif controller.right.is_pressed():
            dirX = 1
            jogador.set_image(imgHeroi)
        elif controller.up.is_pressed() or controller.down.is_pressed():
            dirX = 0
        if controller.up.is_pressed():
            dirY = -1
        elif controller.down.is_pressed():
            dirY = 1
        elif controller.left.is_pressed() or controller.right.is_pressed():
            dirY = 0
        if game.runtime() < fimDash:
            controller.move_sprite(jogador, velocidade * 3, velocidade * 3)
        else:
            controller.move_sprite(jogador, velocidade, velocidade)
        if game.runtime() < fimInvencivel and game.runtime() % 200 < 100:
            jogador.set_flag(SpriteFlag.INVISIBLE, True)
        else:
            jogador.set_flag(SpriteFlag.INVISIBLE, False)
        if fase == 12:
            for nuvemOnda in sprites.all_of_kind(SpriteKind.Duvida):
                nuvemOnda.vy = 45 * Math.cos(nuvemOnda.x / 12)
        if fase == 16:
            chefe.y = 34 + 10 * Math.sin(game.runtime() / 500)
game.on_update(on_on_update)

def on_update_interval():
    global tick, nivel
    if estado == 1:
        tick += 1
        nivel = min(4, Math.idiv(tempoFase, 60))
        if ehChefe(fase):
            logicaChefe()
        else:
            logicaFaseNormal()
game.on_update_interval(250, on_update_interval)

def on_update_interval2():
    global tempoFase, escudo, fimEscudo, pisoAmor, amor
    if estado == 1:
        tempoFase += 1
        if tempoFase % 40 == 0:
            criarVida()
        if fase == 9 and tempoFase % 60 == 0:
            posicionarEspinhos()
        if ehChefe(fase):
            if not (escudo) and tempoFase % 18 == 0:
                escudo = True
                fimEscudo = game.runtime() + 4000
                chefe.start_effect(effects.bubbles, 4000)
                chefe.say_text("Não vou ouvir!", 1500, False)
            if tempoFase % 2 == 0:
                pisoAmor = Math.idiv(amorMax * (etapaChefe - 1), 3)
                if amor > pisoAmor:
                    amor = amor - 1
                    atualizarBarra()
game.on_update_interval(1000, on_update_interval2)

# ------------------------------------------------------------
# IMAGENS (sprites desenhados pela Leviatan Studios)
# ------------------------------------------------------------
imgTung = img("""
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
    """)
imgBallerina = img("""
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
    """)
imgTralalero = img("""
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
    """)
imgJesus = img("""
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
    """)
imgAnjo = img("""
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
    """)
imgGigante = img("""
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
    """)
imgRei = img("""
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
    """)
imgDragao = img("""
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
    """)
imgNuvemFinal = img("""
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
    """)
imgDuvida = img("""
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
    """)
imgPomba = img("""
    . . . . . 1 1 . . .
    . . . . 1 1 f 4 . .
    1 1 . . 1 1 1 . . .
    1 1 1 1 1 1 1 1 . .
    . 1 1 1 1 1 1 1 1 .
    . . 1 1 1 1 1 1 1 1
    . . . . 1 1 . . . .
    . . . . . . . . . .
    """)
imgCoracao = img("""
    . 2 2 . . 2 2 .
    2 3 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
    . . . 2 2 . . .
    """)
imgVida = img("""
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
    """)
imgPao = img("""
    . . 4 4 4 4 4 4 . .
    . 4 d 4 d 4 d 4 4 .
    4 4 4 4 4 4 4 4 4 4
    4 d 4 4 4 4 4 4 d 4
    4 4 4 4 4 4 4 4 4 4
    . e e e e e e e e .
    """)
imgPeixe = img("""
    . . . 9 9 9 9 . . .
    9 . 9 9 9 9 9 9 9 .
    9 9 9 9 9 9 9 f 9 9
    9 9 9 9 9 9 9 9 9 9
    9 . 9 9 9 9 9 9 9 .
    . . . 9 9 9 9 . . .
    """)
imgGota = img("""
    . . 9 9 . .
    . . 9 9 . .
    . 9 9 9 9 .
    9 9 1 9 9 9
    9 1 9 9 9 9
    9 9 9 9 9 9
    9 9 9 9 9 8
    . 8 8 8 8 .
    """)
imgRocha = img("""
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
    """)
imgOvelha = img("""
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
    """)
imgPato = img("""
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
    """)
imgArca = img("""
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
    """)
imgEstrela = img("""
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
    """)
imgTrombeta = img("""
    . . . . . . . . . . 5 5
    5 . . . . . . . . 5 5 5
    5 5 5 5 5 5 5 5 5 5 4 5
    5 4 4 4 4 4 4 4 4 5 4 5
    5 . . . . . . . . 5 5 5
    . . . . . . . . . . 5 5
    """)
imgMuro = img("""
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
    """)
imgMana = img("""
    . . 1 1 . .
    . 1 d 1 1 .
    1 1 1 1 d 1
    1 d 1 1 1 1
    . 1 1 d 1 .
    . . 1 1 . .
    """)
imgTornado = img("""
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
    """)
imgCercado = img("""
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
    """)
imgEspinho = img("""
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
    """)
imgRaio = img("""
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
    """)
imgAviso = img("""
    . . . c c c c c c . . .
    . c c c c c c c c c c .
    c c c c c c c c c c c c
    c c c c c c c c c c c c
    . c c c c c c c c c c .
    . . . c c c c c c . . .
    """)
imgChuva = img("""
    9
    9
    9
    1
    """)
imgViajante = img("""
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
    """)
imgPoco = img("""
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
    """)
imgSemente = img("""
    . . 7 7 . .
    . 7 . . 7 .
    . . e e . .
    . e e e e .
    . . e e . .
    """)
imgFlor = img("""
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
    """)
imgPassaro = img("""
    . . e e . . . .
    . e e f e 4 . .
    e e e e e . . .
    . e e e e e e e
    . . e e e e . .
    . . . 4 . 4 . .
    """)
imgNota = img("""
    . . . a a a a a
    . . . a a a a a
    . . . a . . . a
    . . . a . . . a
    . . . a . . . a
    . a a a . a a a
    a a a a a a a a
    . a a . . a a .
    """)
imgNuvemBranca = img("""
    . . . . 1 1 1 1 . . . . . . . .
    . . 1 1 1 1 1 1 1 1 . . 1 1 . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . . . . . . . . . . . . . . . .
    """)
imgOnda = img("""
    . . 1 1 1 1 . .
    1 1 . . . . 1 1
    . . . . . . . .
    """)
imgZzz = img("""
    . . 9 9 9 9 . .
    . 9 . . . . 9 .
    9 . 8 8 8 8 . 9
    9 . . . . 8 . 9
    9 . . . 8 . . 9
    9 . 8 8 8 8 . 9
    . 9 . . . . 9 .
    . . 9 9 9 9 . .
    """)
imgCoroa = img("""
    5 . . 5 5 . . 5
    5 5 . 5 5 . 5 5
    5 5 5 5 5 5 5 5
    5 2 5 5 5 5 2 5
    5 5 5 5 5 5 5 5
    4 4 4 4 4 4 4 4
    """)
imgSeta = img("""
    . . 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 . .
    . . 5 5 5 5 5 5 . .
    5 5 5 5 5 5 5 5 5 5
    . 5 5 5 5 5 5 5 5 .
    . . 5 5 5 5 5 5 . .
    . . . 5 5 5 5 . . .
    . . . . 5 5 . . . .
    """)
imgPeixeEsq = imgPeixe.clone()
imgPeixeEsq.flip_x()
imgPassaroEsq = imgPassaro.clone()
imgPassaroEsq.flip_x()
# ------------------------------------------------------------
# VARIÁVEIS
# ------------------------------------------------------------
estado = 0
fase = 1
personagem = 0
selecionado = 0
escolhido = False
nomeHeroi = ""
pronome = "dele"
jogador: Sprite = None
chefe: Sprite = None
barra: Sprite = None
cursor: Sprite = None
rotuloNome: Sprite = None
rotuloInfo: Sprite = None
atorHeroi: Sprite = None
atorAnjo: Sprite = None
atorExtra: Sprite = None
atorJesus: Sprite = None
tiro: Sprite = None
novaSemente: Sprite = None
pomba: Sprite = None
item: Sprite = None
perigo: Sprite = None
nuvem: Sprite = None
coracaoExtra: Sprite = None
alvo: Sprite = None
tijolo: Sprite = None
florNova: Sprite = None
enfeite: Sprite = None
aviso: Sprite = None
passarinho: Sprite = None
listaMuros: List[Sprite] = []
listaSementes: List[Sprite] = []
opcoes: List[Sprite] = []
listaDesfile: List[Image] = []
fundo: Image = None
imgHeroi: Image = None
imgHeroiEsq: Image = None
amor = 0
amorMax = 100
pisoAmor = 0
etapaChefe = 1
novaEtapa = 1
padraoAtaque = 0
larguraBarra = 0
angulo = 0
escudo = False
fimEscudo = 0
faseConcluida = False
falhou = False
tempoFase = 0
tick = 0
nivel = 0
dirX = 1
dirY = 0
velTiroX = 0
velTiroY = 0
distX = 0
distY = 0
distancia = 0
posX = 0
posY = 0
velocidade = 80
cadencia = 400
forca = 1
duracaoDash = 250
ultimoTiro = 0
fimInvencivel = 0
fimDash = 0
proximoDash = 0
carregando = 0
pontosInicioFase = 0
horaReconstruir = 0
# Duração de cada fase normal em segundos (300 = 5 minutos)
DURACAO_FASE = 300
imgHerois: List[Image] = [imgTung, imgBallerina, imgTralalero]
nomes: List[str] = ["Tung Tung Tung Sahur",
    "Ballerina Cappuccina",
    "Tralalero Tralala"]
descricoes: List[str] = ["FORTE: coração em dobro",
    "RÁPIDA: super impulso",
    "ÁGIL: corações ligeiros"]
titulos: List[str] = ["Os Pães do Céu",
    "A Pesca Milagrosa",
    "Sobre as Águas",
    "A Arca de Noé",
    "Gigante Resmungão",
    "A Estrela de Belém",
    "Muralhas de Jericó",
    "Maná no Deserto",
    "O Pequeno Pastor",
    "Rei Orgulhoso",
    "A Tempestade",
    "Cânticos no Céu",
    "O Bom Samaritano",
    "A Semeadura",
    "Dragão Dorminhoco",
    "Nuvem da Dúvida"]
instrucoes: List[str] = ["Pegue os pães que caem do céu! Aperte A para lançar corações e transformar as nuvens de dúvida em pombinhas. Resista até o tempo acabar!",
    "Pegue os peixes que nadam pelo mar! Cuidado com as nuvens de dúvida que ficam quicando.",
    "Ande sobre as águas! Desvie das pedras e pegue as gotas brilhantes.",
    "Encoste nos bichinhos para eles te seguirem e leve todos até a arca!",
    "O Gigante Resmungão está muito bravo! Lance corações (A) até encher a barra de amor. Quando ele fizer bolhas, não está ouvindo: espere um pouco!",
    "Siga a estrela! Cada vez que pegar uma, outra aparece. As nuvens frias vão te seguir!",
    "Pegue as trombetas para derrubar as muralhas! Desvie das pedras rolando.",
    "Pegue o maná que cai do céu e as gotas de água. Cuidado com os redemoinhos de areia!",
    "Leve as ovelhinhas para o cercado. Não encoste nos espinhos!",
    "O Rei Orgulhoso some e aparece! Lance corações e desvie das coroas.",
    "Quando aparecer uma sombra no chão, saia de perto: vai cair um raio! Pegue as pombinhas da paz.",
    "Pegue as notas musicais! As nuvens de dúvida voam em ondas.",
    "Pegue água no poço e leve para quem está com sede!",
    "Aperte A para plantar sementes e espere as flores crescerem! Espante os passarinhos encostando neles.",
    "O Dragão Dorminhoco solta bolhas de sono! Lance corações para acordá-lo.",
    "Último desafio! A Grande Nuvem da Dúvida muda de ataque o tempo todo. Coragem: Deus está com você!"]
# ------------------------------------------------------------
# INÍCIO DO JOGO
# ------------------------------------------------------------
telaInicial()
selecionarPersonagem()
cenaAbertura()
info.set_life(5)
info.set_score(0)
fase = 1
while fase <= 16:
    pontosInicioFase = info.score()
    iniciarFase()
    while not (faseConcluida) and not (falhou):
        pause(100)
    estado = 2
    if falhou:
        music.stop_all_sounds()
        limparTudo()
        game.splash("Não desista!", "Deus te dá forças!")
        info.set_life(5)
        info.set_score(pontosInicioFase)
    else:
        comemorarFase()
        cenaDepoisDaFase()
        fase += 1
cenaFinalJesus()
creditos()
game.set_game_over_message(True, "DEUS ESTÁ COM VOCÊ!")
game.game_over(True)