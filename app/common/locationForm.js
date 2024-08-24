import React from 'react'
import { MapPin, Phone } from 'react-feather'

const LocationForm = () => {
  return (
    <div>
        <div className='bg-white p-6 mt-20 px-8 md:w-[35rem] py-7 ' >
            <h2 className='text-primary plusJakara_bold  font-bold  '>The locations I visit :</h2>
            <div className='py-3'>

              <p  className='border-b-2 w-fit border-[#5ebfc6] text-primary plusJakara_bold mb-2 p-0'>
                Cesena:
              </p>
            </div>
            <div className='flex flex-col gap-2 '>
              <div className='italic plusJakara_bold text-secondary'>
                Physiomedical


              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <MapPin className="text-primary" size={16} />
                  <p className='m-0 text-sm text-secondary'>

                    Via Emilia Levante 12/14 (Case Finali district)
                  </p>


                </div>



              </div>

              <p className='m-0 text-sm text-secondary'>
                To make an appointment call:
              </p>
              <div>
                <div className='flex gap-2 items-center'>
                  <Phone className="text-primary" size={16} />
                  <p className='m-0 text-sm text-purple cursor-pointer phone_'>
                  05471880134 
                  </p>


                </div>



              </div>
            </div>
            <div className='flex flex-col gap-2 mt-6 '>
              <div className='italic plusJakara_bold text-secondary'>
              San Mauro Medical Center


              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <MapPin className="text-primary" size={16} />
                  <p className='m-0 text-sm text-secondary'>

                  Via Romea 1140
                  </p>


                </div>



              </div>

              <p className='m-0 text-sm text-secondary'>
                To make an appointment call:
              </p>
              <div>
                <div className='flex gap-2 items-center'>
                  <Phone className="text-primary" size={16} />
                  <p className='m-0 text-sm text-purple cursor-pointer phone_'>
                  0547335935 
                  </p>


                </div>



              </div>
            </div>

            <div className='flex flex-col gap-2 mt-6 '>
              <div className='italic plusJakara_bold text-secondary'>
              Farma Pieve Point


              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <MapPin className="text-primary" size={16} />
                  <p className='m-0 text-sm text-secondary'>

                  Via Dismano 4773 - Pievesistina area
                  </p>


                </div>



              </div>

              <p className='m-0 text-sm text-secondary'>
                To make an appointment call:
              </p>
              <div>
                <div className='flex gap-2 items-center'>
                  <Phone className="text-primary" size={16} />
                  <p className='m-0 text-sm text-purple cursor-pointer phone_'>
                  3515150689 
                  </p>


                </div>



              </div>
            </div>
            <div className='py-3'>
            <p className='border-b-2 w-fit border-[#5ebfc6] plusJakara_bold text-primary '>
            Saracen Market:
            </p>

            </div>
            <div className='flex flex-col gap-2 mt-6 '>
              <div className='italic plusJakara_bold text-secondary'>
              Arcade Physiotherapy clinic


              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <MapPin className="text-primary" size={16} />
                  <p className='m-0 text-sm text-secondary'>
                  Via Sandro Pertini 3
                  </p>


                </div>



              </div>

              <p className='m-0 text-sm text-secondary'>
                To make an appointment call:
              </p>
              <div>
                <div className='flex gap-2 items-center'>
                  <Phone className="text-primary" size={16} />
                  <p className='m-0 text-sm text-purple cursor-pointer phone_'>
                  0547 690077
                  </p>


                </div>



              </div>
            </div>
            <div className='py-3'>
            <p className='border-b-2 w-fit border-[#5ebfc6] plusJakara_bold text-primary '>
            Castel San Pietro Terme:
            </p>

            </div>
            <div className='flex flex-col gap-2 mt-6 '>
              <div className='italic plusJakara_bold text-secondary'>
              Sarti Pharmacy


              </div>
              <div>
                <div className='flex gap-2 items-center'>
                  <MapPin className="text-primary" size={16} />
                  <p className='m-0 text-sm text-secondary'>

                  Via Giacomo Matteotti 28
                  </p>


                </div>



              </div>

              <p className='m-0 text-sm text-secondary'>
                To make an appointment call:
              </p>
              <div>
                <div className='flex gap-2 items-center'>
                  <Phone className="text-primary" size={16} />
                  <p className='m-0 text-sm text-purple cursor-pointer phone_'>
                  051 941234
                  </p>


                </div>



              </div>
            </div>
          </div>
    </div>
  )
}

export default LocationForm
