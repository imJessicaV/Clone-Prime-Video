var main = document.querySelectorAll('.main .center')[0];
fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.map((i,j) => {
            if(j > 10)
            return;
            if(j == 0){
                main.innerHTML +=`
                    <div class="banner-principal" style="background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
                `;
            }else{
                if(j == 1){
                    main.innerHTML +=`
                        <h2>Assista agora</h2>
                        <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.backdrop_path+`" alt="${i.title}"></div>
                    `;
                }else{
                    main.innerHTML +=`
                        <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.backdrop_path+`" alt="${i.title}"></div>
                    `;	
                }
            }
        });
    });
