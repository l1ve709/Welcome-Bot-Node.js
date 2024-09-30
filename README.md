# Discord Welcome Botu

Bu proje şunları sağlar: 3 Tane farklı Discord botu 3 Farklı ses kanalına bağlanır, o ses kanallarına bir üye katıldığında bir müzik çalma işlevi tetiklenir, isteğe bağlı ytRolü değişkenine bir kayıtçı rolünün ID sini ekleyebilirsiniz, kayıtçı ses kanalına girdiğinde çalınan ses otomatik olarak durur.



## Kullanılan Dil(ler)

<picture>
  <source srcset="https://skillicons.dev/icons?i=py" media="(prefers-color-scheme: dark)">
  <img src="[https://skillicons.dev/icons?i=py](https://skillicons.dev/icons?i=js,nodejs)">
</picture>


## Özellikler

- Birden fazla bot token'i ile çalışabilir.
- Kullanıcı ses kanalına katıldığında belirli bir ses dosyasını çalar.
- Ses dosyası çalmadan önce ilgili rol kontrolü yapılır.

## Gerekli Kütüphaneler

- `discord.js`
- `@discordjs/voice`

## Kurulum

### 1. Node.js ve NPM Kurulumu

Node.js'i [resmi web sitesinden](https://nodejs.org/) indirip kurun. NPM, Node.js ile birlikte gelmektedir.

### 2. Projeyi İndiriniz

Projeyi GitHub'dan veya ZIP olarak indirip bilgisayarınıza çıkarınız

### 3. Gerekli Kütüphaneleri Yükleyiniz

Terminal veya cmd yi açarak proje dizinine gidin ve aşağıdaki komutu şu şekil çalıştırın:

```bash
npm install discord.js @discordjs/voice
```

### 4. Bot Token lerini Ayarlama

`config.json` adında bir dosya oluşturun ve aşağıdaki içeriği ekleyin. **Bot token'lerinizi ilgili alanlara yerleştirin**:

```json
{
  "token1": "BOT_TOKEN_1",
  "token2": "BOT_TOKEN_2",
  "token3": "BOT_TOKEN_3"
}
```

### 5. Ses Dosyasını Ayarlama

Ses dosyanızın yolunu `sesYolu` değişkeninde belirtin. Aşağıdaki satırı düzenleyin:

```javascript
const sesYolu = "/home/container/merhabaoyuncu.mp3";  // DOSYA YOLUNU DEĞİŞTİR
```

### 6. Rol ID'sini Ayarlama

Ses kanalına bir kişi girdiğinde çalan sesi anında durdurucak Yetkili Rolünü: `ytRolü` değişkeninde ayarlayın:

```javascript
const ytRolü = '1247644798782017576';  // ROL ID Sİ
```

## Çalıştırma

Botunuzu başlatmak için terminalde aşağıdaki komutu çalıştırınız

```bash
node bot.js
```


## Kullanım

- Bot aktif olduğunda belirttiğiniz ses kanalına bağlanır ve kullanıcının ses kanalına katılması durumunda belirttiğiniz ses dosyasını çalar.

## Katkı

Katkılara her zaman açığım ekleme yapmak isterseniz istek gönderebilirsiniz. Bunu okuyan herkes projeye star atarsa sevinirim

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.



## Discord Hesabım

![My Discord](https://lantern.rest/api/v1/users/794909914760871967?svg=1&theme=dark&borderRadius=2&hideActivity=1&hideStatus=0)
