let repeticao = (int) => {
    while (int >= 0) {
        if (int % 2 === 0) {
            console.log(int);
        }
        int--;
    }
}

repeticao(10);