const f=document.getElementById('book');if(f){const i=document.getElementById('in'),o=document.getElementById('out'),iso=d=>d.toISOString().slice(0,10),t=new Date();
i.min=iso(t);o.min=iso(new Date(+t+864e5));
i.onchange=()=>{if(i.value){const n=iso(new Date(+new Date(i.value)+864e5));o.min=n;if(!o.value||o.value<n)o.value=n}};
f.addEventListener('submit',e=>{e.preventDefault();const m=`Hello, we would love to stay at Dudhsagar Plantation from ${i.value} to ${o.value}, ${document.getElementById('guests').value}. Is a cottage available?`;open('https://wa.me/919765364456?text='+encodeURIComponent(m),'_blank')})}
const s=document.getElementById('signup');if(s)s.addEventListener('submit',e=>{e.preventDefault();s.nextElementSibling.textContent='Thank you. You are on the list.';s.reset()});
const c=document.querySelector('.chips a[aria-current]');if(c)c.scrollIntoView({inline:'center',block:'nearest'});
