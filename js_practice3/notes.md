so let's understand the problem
the problem says ki jb humra mouse move ho toh images pop up hojaaye within tht particular div but agar mouse us particular div ke bhr h toh images wps haat jaaye.

now the probelem is ki we just have limitted card 8 or 9 but the mouse moves multiple times like 160 190 times, we can not have tht much amount of card.

so wht we want is ki mouse jitni baar chal rha hai chle but execution of functon kum ho

so this concept is known as throttling - kisi particuar codde ke number of executoion ko kum kardena

steps:
1)har bar ek div banao
2)div ko absolute banao , uski width and height do , overflow hidden karo
3)and div ke andr image banao and us image ko neeche push kardo
4)img ko animated way me upr laao