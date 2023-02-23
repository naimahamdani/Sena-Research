import React from 'react'
import Service from '../../components/Service'
import service1Pic from '../../assets/service1.jpg' 
import service2Pic from '../../assets/service2.jpg' 
import service3Pic from '../../assets/service3.jpg' 
import service4Pic from '../../assets/service4.jpg' 


const OurServices = () => {
  return (
    <div id='ourServices' className=' py-16 '>
      <div className='text-center mb-24'>
        <h1 className='text-primary font-semibold text-[50px] leading-[60.95px] '>خدماتـنــا</h1>
        {/* TEXT HEAD ANIMATION */}
        <div className='hidden'></div>
      </div>
      {/* SERVICES */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 gap-y-24 w-4/6 mx-auto'>
        <Service serviceName={'مساعدة إفتراضية'} redirectTo={''} servicePicture={service1Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  />
        <Service serviceName={'دورات تعـــليميــــة'} redirectTo={''} servicePicture={service2Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  />
        <Service serviceName={'تدقــيق لغوي'} redirectTo={''} servicePicture={service3Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  />
        <Service serviceName={'دروس دعم'} redirectTo={''} servicePicture={service4Pic} serviceDescription={'.موسبيإ ميرول صن نم خسن ىلع اًضيأ توح يتلاو ركيام جياب سودلأ لثم ينورتكلإلا رشنلا جمارب روهظ عم اَرخؤم ىرخأ ةرم رشتنيل داعو ،صنلا اذه'}  />
      </div>
    </div>
  )
}

export default OurServices