---
slogan: 'Inspiring the Next Generation'
slogan_subtext: 'Helping Youth in the Caribbean explore their passions as techies and entrepreneurs.'
get_involved:
    subtext: 'Come And Be A Part Of The Digital Revolution'
circle1_caption: 'Volunteer With Us!'
circle1_hover_text: 'Want to Volunteer?'
circle1_hover_link: /
circle2_caption: 'Sponsor Us'
circle2_hover_text: 'Want to Sponsor?'
circle2_hover_link: /
circle3_caption: 'See our Events'
circle3_hover_text: 'Come to an Event!'
circle3_hover_link: /
join_community:
    subtext: 'Love Tech And Not Sure Where To Go? Come And Join Us!'
join_community_caption: 'In our community you will find a myriad of youth personalities: experienced coders, tech-entrepreneurs, tech enthusiasts.'
programs:
    subtext: 'Here are a few of our initiatives aimed at helping Techies in the Caribbean'
contact_us:
    subtext: 'Have a burning question? Reach Out to Us! '
contact_email: info@nextgencreators.com
contact_number: 876-451-3421
sponsors_donors:
    subtext: 'Here are a few of our biggest supporters'
circle1_img:
    user/themes/next-gen/images/home/home_involved1.JPG:
        name: home_involved1.JPG
        type: image/jpeg
        size: 8192102
        path: user/themes/next-gen/images/home/home_involved1.JPG
circle2_img:
    user/themes/next-gen/images/home/home_involved2.JPG:
        name: home_involved2.JPG
        type: image/jpeg
        size: 5671058
        path: user/themes/next-gen/images/home/home_involved2.JPG
circle3_img:
    user/themes/next-gen/images/home/home_involved3.JPG:
        name: home_involved3.JPG
        type: image/jpeg
        size: 7345369
        path: user/themes/next-gen/images/home/home_involved3.JPG
join_community_img:
    user/themes/next-gen/images/home/home_join.JPG:
        name: home_join.JPG
        type: image/jpeg
        size: 7667609
        path: user/themes/next-gen/images/home/home_join.JPG
title: Home
join-community-caption: 'aYou see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. Eliptical talk. Fan luv. Find peace, life is like a water fall, you’ve gotta flow.'
contact-email: ainfo@nextgencreators.com
contact-number: a876-451-3421
circle1-img:
    user/themes/next-gen/images/home_involved1.JPG:
        name: home_involved1.JPG
        type: image/jpeg
        size: 8192102
        path: user/themes/next-gen/images/home_involved1.JPG
circle3-caption: 'See our Events'
circle2-caption: 'Sponsor us'
circle1-caption: 'Volunteer With dUs'
slogan-subtext: 'Helping Youth in the Caribbean explore their passions as techies and entrepreneurs.'
tagline: 'Inspiring the Next Generation'
tagline-subtext: 'Helping Youth in the Caribbean explore their passions as techies and entrepreneurs.'
form:
    name: contact
    fields:
        -
            name: honeypot
            type: honeypot
        -
            name: name
            label: 'Full Name'
            id: name-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: email
            label: 'Email Address'
            id: email-field
            type: email
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: subject
            label: Subject
            id: subject-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
        -
            name: message
            label: Message
            id: message-field
            autocomplete: 'on'
            type: text
            outerclasses: 'input-field col s12'
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
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
custom_file:
    'user/pages/01.home/ncb logo.png':
        name: 'ncb logo.png'
        type: image/png
        size: 25665
        path: 'user/pages/01.home/ncb logo.png'
---

yesasdf