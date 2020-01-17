var fs = require('fs');
var wav = require('wav');
var Speaker = require('speaker');

let fileCrash = fs.createReadStream('./pearlsamples/crash-01.wav');
let fileSnare = fs.createReadStream('./pearlsamples/snare-02.wav');



// pipe the WAVE file to the Reader instance
// file.pipe(reader);
// console.log('PLAY')
// file.pipe(reader);


let speakerConfig = {
    audioFormat: 1,
    endianness: 'LE',
    channels: 2,
    sampleRate: 44100,
    byteRate: 176400,
    blockAlign: 4,
    bitDepth: 16,
    signed: true
}

let speakerSnare = new Speaker(speakerConfig);
let speakerCrash = new Speaker(speakerConfig);

speakerCrash.on('flush', () => {
    console.log("end");
    speakerCrash.close();
});

speakerSnare.on('flush', () => {
    console.log("end");
    speakerCrash.close();
});

const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    // console.log(str);
    // console.log(key);
    // if (key.sequence == '\u0003') {

    // };
    fileCrash = fs.createReadStream('./pearlsamples/crash-01.wav');
    fileSnare = fs.createReadStream('./pearlsamples/snare-01.wav');

    var reader = new wav.Reader();

    reader.on('format', function (format) {
    console.log(format)
    // the WAVE header is stripped from the output of the reader
        let speaker = new Speaker(format);
        reader.pipe(speaker);
        speaker.on('flush', () => {
            console.log("end");
            setTimeout(() => {
                console.log("close");
                speaker.close();
            }, 1);
        });
    });

    switch (key.sequence){

        case '\u0003':
            process.exit();
        case 'a':
            fileCrash.pipe(reader);
            break;
        case 'd':
            fileSnare.pipe(reader);
            break

    }
})
