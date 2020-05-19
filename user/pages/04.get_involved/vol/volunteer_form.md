---
title: Volunteer
page_title: 'Want to Volunteer?'
form:
    name: volunteer-form
    fields:
        -
            name: honeypot
            type: honeypot
        -
            name: skillset
            label: skillset
            id: skillset
            type: checkboxes
            options:
                option1: 'I''m good at explaining things'
                option2: 'I''m super organized'
                option3: 'I know lots of people'
                option4: 'I have other cool skills'
        -
            name: 'First Name'
            label: 'First Name'
            id: first-name
            autocomplete: 'on'
            outerclasses: 'input-field'
            type: text
            validate:
                required: true
        -
            name: 'Last Name'
            label: 'Last Name'
            id: last-name
            autocomplete: 'on'
            outerclasses: 'input-field'
            type: text
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
            classes: 'btn waves-effect waves-light'
        -
            type: reset
            value: Reset
            classes: 'btn waves-effect waves-light'
    process:
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for getting in touch!'
        -
            display: thankyou
---

If you want to volunteer, here's how to get in touch with us!