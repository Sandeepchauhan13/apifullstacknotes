import express from 'express';

// ye server bna 

const app =  express ();

// app.get('/', (req,res)=>{
//     res.send('Server is ready');
// });

// express static folder serve karo from dist 
app.use(express.static('dist'))


// get a list of five jokes  object hai jokes ka id title content  
// api ki standard practice follow ki jati hai jo e.g /api/v1/jokes e.g /api/jokes 
app.get('/api/jokes', (req, res)=>{
const jokes = [
    {
        id: 1,
        title: 'A joke',
        content: 'Kanet are thahri ke jagiya'
    },
    {
        id: 2,
        title: 'second joke',
        content: ' Thahri ka Jagiya'
    },
    {
        id: 3,
        title: 'third joke',
        content: 'Uk se aaa rr ladki india '

    },
    {
        id: 4,
        title: 'fourth joke',
        content: 'kanet are kirats'
    },
    {
        id: 5,
        title: 'fifth joke',
        content: 'khosh are kanets '
    }
];
res.send(jokes);
});



// port bnate hen in production process.env.PORT se h port milega agar vha s port 
// nahi mil rha ho...  to app run nahi hogi 

const port = process.env.PORT || 3000;


// app listen kare port jo dia hai or console bhi kar do kon se port par serve ho ra hai 
// #Error: if error occur write "type": "module", inside package.json starting main hi--
// -- sari files assemble karni hai module ki trah na ki  common js ki trah  

app.listen(port, ()=>{
    // inside backticks 
    console.log(`Serve at http://localhost:${port}`);
});
