import React from 'react'

function UserGuide() {
  return (
    <div className='w-full flex flex-col gap-[70px] justify-center items-center pb-[100px]'>
        <div>
            <h1 className='font-serif text-[#032d60] font-bold text-[3rem] text-center'>How to Use the Tool ?</h1>
        </div>
      <div className='w-[50%] flex flex-col gap-[50px] justify-center items-start'>
        <div>
            <h1 className='font-serif text-[#032d60] font-bold text-[2rem] text-center  pb-5'>Uploading a Dataset:</h1>
            <ul className='list-disc pl-5 text-[20px] space-y-4'>
                <li>Click on the "Upload Dataset" button to access the dataset upload page.</li>
                <li>Prepare your dataset in CSV format with a column containing customer comments.</li>
                <li>Upload the file by following the on-screen instructions.</li>
                <li>Preview the uploaded data to ensure accuracy before proceeding.</li>
                <li>Once processed, the tool will display the dataset with an additional intent classification column.</li>
                <li>Download the updated dataset for further analysis or record-keeping.</li>
            </ul>
        </div>

        <div>
            <h1 className='font-serif text-[#032d60] font-bold text-[2rem] text-center  pb-5'>Classifying a Single Comment:</h1>
            <ul className='list-disc pl-5 text-[20px] space-y-4'>
                <li>Click on the "Classify Comment" button to access the real-time comment classification page.</li>
                <li>Enter or paste a customer comment into the input box provided.</li>
                <li>Submit the comment for processing.</li>
                <li>Instantly view the predicted intent displayed on the screen in an easy-to-read format.</li>
            </ul>
        </div>

        <div>
            <h1 className='font-serif text-[#032d60] font-bold text-[2rem] text-center  pb-5'>Understanding Results:</h1>
            <ul className='list-disc pl-5 text-[20px] space-y-4'>
                <li>For datasets, the tool adds an intent column to your data, summarizing the type of query or comment.</li>
                <li>For single comments, the tool provides a concise and clear output of the comment and its corresponding intent.</li>
            </ul>
        </div>

        <div>
            <h1 className='font-serif text-[#032d60] font-bold text-[2rem] text-center  pb-5'>Explore More Features:</h1>
            <ul className='list-disc pl-5 text-[20px] space-y-4'>
                <li>Use the navigation menu to access additional resources, including detailed guides, FAQs, and customer support.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default UserGuide
