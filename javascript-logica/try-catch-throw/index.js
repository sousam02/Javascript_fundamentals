// try {
//     console.log(naoExisto);
// } catch(error) {
//     console.log('naoExisto não existe');
// }

function soma (x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}

console.log(soma(1, 2))

try {
    console.log(soma('2', 3));
} catch (error) {
    console.log('Alguma coisa mais amigável para o usuário');
    console.log(error)
}