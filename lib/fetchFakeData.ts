export default async function (){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

        if(!res.ok){
            throw new Error('Error Occured')
        }

        return res.json()
    } catch (error) {
        console.log(error)
    }
} 