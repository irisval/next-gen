---
title: 'Get Involved'
featured_subtext: 'We have some exciting events coming up and we''d love to meet you there!'
other_ways_subtext: 'Come and play a major part in our journey'
other_ways:
    -
        name: Volunteer
        description: 'If you want to become a volunteer for any of our programs, whether it be our hackathons, coding workshops, startup summits or coding bootcamps, let us know! And don''t worry, you don''t need to know how to code in order to help!'
        url_bottom: /next-gen/get_involved/vol
    -
        name: Join
        description: 'Ready to join an amazing tech/startup community with people who love to build things? Come join us! '
        url_bottom: /next-gen/community
    -
        name: Subscribe
        description: 'Keep up to date with everything that we''re doing. Subscribe to our mailing list to get the latest news on events, community shout outs and things to look out for in the region! '
other_ways_link: next-gen/get_involved/sponsor
form:
    name: email-form
    fields:
        -
            name: honeypot
            type: honeypot
        -
            name: email
            label: Email
            id: email-field
            type: email
            outerclasses: 'white-text col s12'
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
            message: 'Thanks, be on the lookout for some awesome things!'
---

