import BUY_CAKE from './cakeTypes'
export const buyCake = (number = 1) => {  //number = 1 is added to ensure that default val is 1
    return {
        type: BUY_CAKE,
        payload: number //payload send additional info to the reducer
    }
}