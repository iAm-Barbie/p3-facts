import React from 'react';
import { Form, FormGroup, Label, Input, Button} from "reactstrap"
const ScrapeButton = props => {
    
    return (
        <Form inline onSubmit = {props.scrape}>
        <Button onClick = {props.scrape}>Scrape</Button>
    </Form>
    )
}

export default ScrapeButton;