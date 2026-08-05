import { motion } from "framer-motion";


function Testimonials(){


const reviews=[

{
quote:
"CustomerIQ AI completely changed how we understand our customers. We can now predict problems before they happen.",
name:"Sarah Mitchell",
role:"Chief Growth Officer"
},


{
quote:
"The AI insights helped our team improve retention and make faster decisions using real customer data.",
name:"Daniel Carter",
role:"Product Manager"
},


{
quote:
"We reduced manual analysis time significantly and discovered opportunities we were missing before.",
name:"Michael Brown",
role:"Head of Analytics"
}


];



return(

<section className="
bg-[#050505]
py-32
text-white
">


<div className="
mx-auto
max-w-7xl
px-6
">



{/* Heading */}

<div className="
text-center
max-w-3xl
mx-auto
">


<p className="
text-sm
uppercase
tracking-[0.3em]
text-gray-500
">

Customer Stories

</p>



<h2 className="
mt-6
text-4xl
font-bold
tracking-tight
sm:text-6xl
">

Loved by teams
building the future.

</h2>



<p className="
mt-6
text-lg
text-gray-400
">

See how companies use AI
to understand customers and
grow faster.

</p>


</div>





{/* Reviews */}

<div className="
mt-20
grid
gap-6
md:grid-cols-3
">


{
reviews.map((review,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.15
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-8
"


>


{/* Stars */}

<div className="
flex
gap-1
text-sm
text-gray-300
">

★★★★★

</div>



{/* Quote */}

<p className="
mt-6
leading-relaxed
text-gray-300
">

"{review.quote}"

</p>




{/* User */}

<div className="
mt-8
border-t
border-white/10
pt-6
">


<h3 className="
font-semibold
">

{review.name}

</h3>


<p className="
mt-1
text-sm
text-gray-500
">

{review.role}

</p>


</div>



</motion.div>


))

}


</div>



</div>


</section>

)

}


export default Testimonials;