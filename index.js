// const playerCrash = require('node-wav-player');
// const playerHiHat = require('node-wav-player');


const play = require('audio-play');
const load = require('audio-loader');

main = async () => {

    let snareSound = await load('./pearlsamples/snare-02.wav');
    let crashSound = await load('./pearlsamples/crash-01.wav');


    // let playHiHat = () => {
    //     playerHiHat.play({
    //         path: './pearlsamples/snare-02.wav',
    //     }).then(() => {
    //         //console.log('The wav file started to be played successfully.');
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }

    // let playCrash = () => {
    //     playerCrash.play({
    //         path: './pearlsamples/crash-01.wav',
    //     }).then(() => {
    //         //console.log('The wav file started to be played successfully.');
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }

    const readline = require('readline');

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', (str, key) => {
        // console.log(str);
        // console.log(key);
        // if (key.sequence == '\u0003') {

        // };

        switch (key.sequence){
            case '\u0003':
                process.exit();
            case 'a':
                play(crashSound);
                break;
            case 'd':
                play(snareSound);
                break

        }
    })

};

main();
