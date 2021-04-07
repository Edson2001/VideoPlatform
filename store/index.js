

export const state = ()=>({
    classActual: 'close',
    vidoes: [],
    message: ''
})

export const mutations ={
    toogleModal(state){

        if(state.classActual == 'close'){
            state.classActual = 'open'
        }else if(state.classActual == 'open'){
            state.classActual = 'close'
        }

    },

    setValues(state, payload){
        
        state.vidoes = payload
    },

    getValues(state, payload){
       
       state.vidoes = payload
        
    }
       

}


export const actions={

    async SET_VALUES({commit}, payload){

         if(localStorage.getItem('video') == null){

            localStorage.setItem('video', JSON.stringify([
                payload
            ]))
        }else{

            let localVideos = JSON.parse(localStorage.getItem('video'))

            localVideos.push({
                name: payload.name,
                description: payload.description,
                link: payload.link
            })

            localStorage.setItem('video', JSON.stringify(localVideos))

        } 
        commit('setValues', JSON.parse(localStorage.getItem('video')))

        return true;

    },


    async GET_VALUES({commit}){

        if(localStorage.getItem('video') === null){
            commit('setValues', [])
        }else{
           commit('setValues',  JSON.parse(localStorage.getItem('video')))
        }

    }
    
}