import React, {useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import uniqid from 'uniqid';
import Localbase from 'localbase';
import PWAPrompt from 'react-ios-pwa-prompt';
import Lottie from 'react-lottie';
import CubeLoader from '../../assets/lotties/cube.json';

let db = new Localbase('db');
// Object { title: "", text: "", id: "" }

const Newnote = ({setNotes}) => {

    const [form, setForm] = useState({title: '', text: ''})
    const [id, setId] = useState(uniqid())

    function handleInputChange(event) {
        const {value, name} = event.target
        setForm({...form, [name]: value, id})
        //console.log(form)
    }

    function saveNote() {
        if (form.title !== '' || form.text !== ''){
            setNotes(note => [...note, form]);
            setId(uniqid());
            setForm({title:'', text:''});
            db.collection('dbnotes').add(form)
        }
    }

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: CubeLoader,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
      };

    //console.log(setNotes)
    return (
        <Container>
        <Lottie
        options={lottieOptions}
        height={200}
        width={200}
        />
        <PWAPrompt />
        <Form onSubmit={saveNote}>
            <Form.Group>
                <Form.Label>New Title</Form.Label>
                <Form.Control onChange={handleInputChange} 
                    value={form.title} as="textarea" 
                    rows={1} name="title" type="text" 
                    placeholder="Title" />
            </Form.Group>
            <Form.Group>
            <Form.Label>New Note</Form.Label>
            <Form.Control onBlur={saveNote} onChange={handleInputChange} 
                value={form.text} as="textarea" 
                rows={10} name="text" type="text" 
                placeholder="Note" />
            </Form.Group>
        </Form>
        <Button onClick={saveNote} type="submit">
            Save
        </Button>
        </Container>
    )
}

export default Newnote;