---
title: Sponsor
page_title: 'Sponsor Us!'
form:
    name: sponsor-form
    fields:
        -
            name: honeypot
            type: honeypot
        -
            name: Company
            label: Company
            id: company-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: Contact
            label: Contact
            id: contact-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: Address
            label: Address
            id: address-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: State
            label: State
            id: state-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: City
            label: City
            id: city-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: Zipcode
            label: Zipcode
            id: zipcode-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: Phone-number
            label: Phone-number
            id: phone-number-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: email
            label: Email
            id: email-field
            type: email
            outerclasses: 'input-field col s12'
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
            email:
                from: '{{ config.plugins.email.from }}'
                to: ['{{ config.plugins.email.from }}', '{{ form.value.email }}']
                subject: '[Feedback] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your feedback!'
        -
            display: thankyou
---

If you want to sponsor us, here's how to get in touch!