import React from 'react';
import './About.css'


const About = () => {
    return (
        <>
            <div className="title ">
                <h1 className='text-center mt-5 text-uppercase about'><span>About</span> Us</h1>
            </div>
            <div className="container my-5 ok">
                <div className="row">
                    <div className="col-md-8">
                        <div className="one d-flex justify-content-center  ">
                            <div>
                                <h1 className="service">Excellent Tourguide Service</h1>
                                <p>As important as strategy is, we have to execute to win. Execution involves every employee and every relation we have with customers.</p>
                                <p>Read More</p>
                            </div>
                        </div>
                        <div className="about-description one" >
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="about-service-img text-center my-5">
                                        <img className='w-25' src="https://www.kindpng.com/picc/m/335-3351433_branch-company-branch-icon-icon-png-transparent-png.png" alt="" />
                                    </div>
                                    <div className="about-service-text">
                                        <h4>Connections around the world</h4>
                                        <p className='text-justify'>Available at your services incase of booking from different parts of the world</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="about-service-img text-center my-5">
                                        <img className='w-25'  src="https://thumbs.dreamstime.com/b/finding-property-search-logo-design-guide-to-find-good-apartment-hotel-symbol-sign-vector-illustrations-finding-property-search-168953854.jpg"  alt="" />
                                    </div>
                                    <div className="about-service-text">
                                        <h4>Available Motels </h4>
                                        <p>To ensure better and comfortable place for your stay</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="about-service-img text-center my-5">
                                        <img className='w-25' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWEhUWFRUSGBQYHRoSGRoYFB8ZHBwcHBQcGRoaGB4cLi4lHB4rIRoZJjgmKzAxNTU1GiQ7QD4zQy40ODEBDAwMDw8QGBERGDEdGB0xMTQxNDExMT80ND8xMTE0NDQ/PzQxMTE0NDE/MTExMT8/NDE/MTQ0NDQxMTQxPzExNP/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcGCAIDBAH/xABLEAACAQIDAwcGCwYDBwUAAAABAgADEQQSIQUGMQcTIkFRYZFSVHFzgbIUFhcyMzVykpOz0iNClKGx0SRTYhU0dIK0wsQlRIOjwf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAEQESYf/aAAwDAQACEQMRAD8AuaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHyYxvHvth8KxQ5qlYcUS3R+2x0Ho1PdG/u3jhcKShtWqHm0Pk6XZvYOHeRKQZiSSSSTqSTcknUknrMuYm6sGpypVb9HDUwOw1GJ8QBPnypVvN6P32lfRLEqwflSreb0fvtHypVvN6P32lfREKsH5Uq3m9H77R8qVbzej99pX0RCrMwPKkMwFfDkL5VN8xH/KwF/GZ7sralLEUxUouHU6aaEHsYHUHuM12k1upt5sHiVcE82xCVV6mW/G3lLcke0dZki1f0TgrAgEag6ic5FJ4Nq7UpYemalZwijTXUk9gA1J7hPYzAAk6AamUJvXt5sZiWck82pKUl6lW/G3lNYE+wdQlxNZljuVIZiKGHJXyqj5Sf+VQbeM8nypVvN6P32lfRLEqwflSreb0fvtHypVvN6P32lfREKsH5Uq3m9H77R8qVbzej99pX0RCrCp8qVW/Sw1MjsFRgfEgzLt3N9sPimCDNTrHgj26X2GGh9Gh7pR8+qxBBBII1BBsQRqCD1GIVsvExfcLbxxWFBc3rUzzbnytLq3tHHvBmUTLRERAREQKq5XnPPYZeoI5HpLKD7oleSweV76fDfYf3hK+msZ0iZfszk/xNeilVWoItRQ6h2bNlIupOVSBca8Z6/kwxX+ZhfvP+iKRgsTOvkwxX+ZhfvP+icKnJniwpIfDMQLgBnBPcLra/pikYRERCkREDYLdeoWwOFY8TRpE/hrJaQ+6X1fhPU0vy1kxMqid6KhXA4phxFGqR+G019mwG9v1fi/U1fy2mvzuALmXE16MDg3rVFpU1zO5yqLgXNr8TYcAfCSO192sVh7mrRYIP316ae1l+b7bTFa1QsQdRY3FjaxBuCD298sbc7lNZMtHHFnT5or2uwHUKoHzh/qGvaDqZRhd4l6pu3gaz08SlOi2oqK1MjI/YxC9Ftdb9omObb5PUYYqqnRY9OjTRSQLLdlKnyjwA0XT0RUirZLbK3dxWIXNQoO6cMxKovsZiA3svMl3K3Haq3O4pGWkpIWk6lWcg2OcGxVAerr9HGx9s7Tp4TDNUYAKgyoi2GY2sqKO/wDkLnqikUDXpMjsjgq6EowPEMpsQfaJ1ztxNdnqO76u7NUb0sxY/wAzOqFWHyQueexK9RRCfSGYD3jLVlUckP0+J+wnvGWvJphERIpERAqjle+nw32H94SscXiLggcOs9ssflocivhh2o/viVe81iNmN1f9wwnqKX5SyWkPuwwGz8ISbAUKRJPV+yXjOWA3hwtd8lHE4eo+pypUViQOJWx1A7RMqloiIFL4hsFhcFhK1bCNiKmJ5xyeeZMuVuGmnBgOHVOjC08FtAOmFpNhcYozpTeqXSsoGqqzfNcez2i5XOdh4HCPsrDPjEw7U6aE5qwXKt2IOraC+n8p6tj7K2TVbNhaWBdqbK16aoWRr3U6aqdLg90qKWq02RmR1KupKsrCxBHEEdRnCZ9yt4VVxFCooAaorByOvIVCk99mIv2AdkwGUbAbpfV+E9TS/LWTEh90vq/CeppflrJiZVDb4NbZ2MPZQqn/AOtprlVcsZsXvn9W431FX8tproRLia6iJwIncROJEomd197MRgXvSbPSJu9Jj0W7SvkN/qHtBl87t7cTG4Za9NXVSSpDrYhhowB4ML/vC49oIFH7kbqtjsRlOZcOlmquNPQinym/kLnsvc+3NuYbZ2GXNlVVXJSpJbM2UWCovUBpcnQdcmmJ52sCbE21sOJ7hKG3p3hq4utmcMiL8ymf3Aes9rHrPhpLh3V2+mNwy100PzXS9yjj5yE6X6iDYXBB65h/Kfsms4FcJR5mkAl1+kytbV+oqG0AHC5PWbMNVlERKLB5Ifp8T9hPeMteVRyQ/T4n7Ce8Za8mmEREikRECnuWr/eMN6t/fErN5ZvLT/vGG9W/viVqVmsRl2B35qNQw+CxCp8FVqVOo6hgxoo6kowBsQVFjYarcdcyrePabU6GIqVq+CdA9OpswUCM6lW04WsuXKG1IPSGgIEqTLPq0wOA/lEFh/K9ifN8N4v/AHnGryt4sqQtHDKxBAbpmx7bE6zAMk+ERBmm5O8hathcNinp8xRFRqBqCyisw/Zmqb2IW7hSQLFh12ImNu7er4VcJUqVMJV2or1A5pC6HDsjDLVy5f3sjAafMv1G9ZLTJNp78PQCCwAgqa3g3grYx0evkBRcqqilVFzcnpEm506+oSKiIGwG6X1fhPU0vy1kxIfdL6vwnqaX5ayYmVQu+P1djPUVfy2mu5E2J3w+rsZ6ir+W013qNb0y4mumo1pnu6uF2TjmWiaFfDYlgbBa71FYhbsUZ8wGgJswHdeV805YbFPSYtTd0cqUzIxVsrcQCNRfulF2bc2rR2LhKVDD0mZ3zlMx0LCxepVYWuekNBx0AsBpTO1NoVcRVarXdnqNxJ6h1Ko4Ko6gJlO8G8K4vZmEzuDiqNRqTgnpMvN6VPQbJc+VeYewgT+4+87YHEhiWOHeyVlGul9HUeUtye8Ejslrco+C+EbPFWm2YUytcZTdWQizHsIAIa/+k9soZhLO5Kt6AQdn4ggo4YUSx01BzUTfqIuV9o7BIMHievauEFKvVpA5gjvTB7QrED26TySiweSH6fE/YT3jLXlUckP0+J+wnvGWvJphERIpERAqzlnwDEYauB0Vz0W7i1mT3X/lKrtNmNr7Mp4mg9GqLo4se0HirL2EEAj0Si95N1K+Dc51LUb9Gqo6JHVm8hu4+y8uJrHAs+5Z2hYIlHURPipcztCXneiWgfKdMKO+c4iAn1EJICgliQoA4kk2AHfeEQswVQWY6BVFyT2ADUyzNw9ynpuuJxK5SvSp0zxB6nfsI6l6uJsRAz7ZOE5rD0aX+WiU/uqB/wDk9sRMq8O2cJz2Gr0hxqU3pj0shUf1mtDoQSGBDAlWB4gg2IPeDpNpZV3KFuK71GxOFXMzdKrSHEnrdB1k9a8SdRcm0uJqpyJ8Wned7UiGKsCrLowYWIPYQdQZzy2lHTltOJE7mE62EDqYTvwlE5le5GUhlINjcG4II4WIBvOVGjfU8P6z1QPrG5JOpOpM+RJ3dzdevi3GRStK/SqsOiB15fKbuHttAzDkiwTAYmsfmsUpL3lbs/vJ/OWXPDsrZyYeilGmLIgsO0niSe0kkk+me6ZUiIgIiICcStxY6zlECKq7u4RiWbCYVmPEmghPiROHxXwXmeD/AIen/aTEQIgbs4LzPB/w6f2j4s4LzPCfw6f2kvECI+LOC8zwn8On9o+LOC8zwn8On9pLxA8mD2bRpfRUaNP7FNU90CeuIgIiICIiB48bsyhV+lo0an26av7wM8fxYwXmeD/hk/tJiIEN8VsD5lg/4en/AGj4q4HzLB/w6f2kzECI+LOC8zwn8On9o+LOC8zwn8On9pLxAi6W7+EU3XC4VSOsUEB8QJJAW9E5RAREQEREBERATrdwASSABqSTYD0zx7Y2mmGoPWqGyoL2HEk6Ko7ybCUhvFvHXxjE1GIS90pqeio6tP3m/wBR9luEsSrmqbz4JTY4rDX9ap/oZ8+NWC87w/4qygYiFX98asF53h/xVj41YLzvD/irKBiIVf3xqwXneH/FWPjVgvO8P+KsoGIhWxGC2xh6xtSr0XPYlRWPgDeSE1nBsQRoRqCOIPUQeoyytwd9HaouGxLFs1lp1G+dm6kc/vX6m430N7iyFWdERIpESsd/t9XWo2GwzlcvRqVF+dm60Q/u262430FrG4Z9jdsYeibVa9FD2PUVT4E3nl+NWC87w/4qygSbkk6k6kniT1knrMSxKv741YLzvD/irHxqwXneH/FWUDEQq/vjVgvO8P8AirHxqwXneH/FWUDEQq/6e8+CY2GKw1/WqP6mSqOCAQQQdQQbg+ia1yZ3d3jr4NgabEpe702PRYden7rf6h7b8IhV/wASP2PtNMTQStTN1cXseIINmU94Nx7JISKREQERECs+V7GNbD0Qeic9Vu8iyr7zSs5YPK99PhvsP7wlfTWM6QTOzBqr16FM3/aVKdM24gPUVSfAmX/R2ZhaahFpUFAFgCq39t9Se8xSNfMw7RGYdol0727OqvTQYBsDTqB7uaiJYplOguja3t1TF22HtoW/b7LF9RdKdvydRFWK+zDtEAzYgYfDeTh/upML5TdkUPgoroiK6uq5kAF1a4INtDY2N+q3eYqRVc+qxBBBII1BHEEagjvnyIVsVsfF87hqNU8XRKh9LICf6z3SH3S+r8J6ml+WsmJlXh2xi+aw1aqOKI9QelUJH9JrszEkkkknUk8STqSe+X/vb9X4v1NX8tpr/LiaRE7cLhXrVFo0Vz1nzBEzBblVZzcsQBopOp6pRz2fhjVrU6KsqvUYU1LXtc8L2BNurh1zv2ts04eoqPUpksSl1z2UrVak17qCbMjcAdBLf2Nubhaa4eo2HQYhFRi2ZiQ4UZjobcb909eN3QwVVg9SgrMCzAlm4tUao3A9bOx9slIp3buwXwrZXekzZihCFzYhEfUsoFstROHb3SImwG0N3MNXYtVoq7E5iSzDXIqX0Pkoo9kqffnd5sPiGdKQTDOypTswNzzYLC1yw1DcZc1Nxi8REKszkhxjWxFEnojJVXuJure6ssyVRyQ/T4n7Ce8Za8mmEREikRECqOV76fDfYf3hK5r1co75YfLG9q+G7cj++JWFRvGaxHr2C98dhbnXn6P5ySV5TKYO18ZcA9KkNRf/ANrSlg7s4fD/AOx8KzLRz85SOawDZvh6hdVBa97D+RIFyMD5SB/6ti/tU/8ApaUDEDQXyV8BJTbNMGngrgG2GAFxw/xeJ4TwvJXag/Z4P/hh/wBXiYEKcOvkr4CWLs0W3cbsGJ/7hMAaW1yeKh2XRFTKUOL4NwJ0sOBB1tobDvjRXIMTLuUyki48CmEA5qmSEAAvnfjbrtl/lMRgbAbpfV+E9TS/LWTEh90vq/CeppflrJiZVD72/V+L9TV/Laa/zYDe36vxfqav5bTX2o9h3y4muNarlHfPHh87VUCOy1XZURgxQhnOQdJdVHStp1Ez6wLHrJPUBcn0CZDu/ufjqlWlUTDOqo6VM1U80CEcN+90tbcQplGfb37rY+uuEGHrZDToilU/xD08zgLc9EdLgdTIzZu5u1Fo4pHr3eoiJTPwuo2VhXR2NyLr0VYXHolg/B8ZUHTrUqAI+bQXnHB7qlUZT+HI3amwqQqYXMa1RnrZWapXdjb4NWboi4VNVU9ALqBJVYTsvcfayYii74i6LUpu4+GVWuqurMMpFjcAixnn5SsPUTHOWZilQLURc7MqgIqGynRTdW4dss//AGRVT6DFVVAFglcfCE9JLEVT+JMN353cx2JdKgp0XyLk/ZVNW6RObK4GXjwDNFRWkT04zA1KTZatOojdjqV8L8fZPNKLB5Ifp8T9hPeMteVRyQ/T4n7Ce8Za8mmEREikRECoOWg/4jDfYf3xKyaWZy0D/EYb1b++JWrCaxHq3fQfDcKbC/P0df8A5kl8bX3NwOIrNVr071XtmIrOmayhAbKwF7ADh1Sgtm4kU8RQqNfIlSnUawucqVFZrDrNgZcO3Nw8NtKucWmKcrUVPmZXACqFBRj8zQXt23MmmJCpycbMAu1FgOFziKg/7p2VtytmuKammtqaiklq7g5czPY2a7HM7G511k9tCgHQJnVSCDdma+g68jKb+2R9PZQDKefpaEHjV6jfrqkeIMio2pyb7MAuaLAdpxFQf90jN+9h4fD7HNGgmWlzqPbOWuS9ybsSTJ/fDdantGlTR6rIEYuClmBJXKQQdDx0PV7ZiO9GCoYHZaYFKxqOanOWJFwMxZjlX5i3sAO0+mVFeIgAsAAB1CfYiUbAbpfV+E9TS/LWTEh90vq/CeppflrJiZVDb4G2zsZ6ir+W011c9ZmxO+P1djPUVfy2muTteXE1xTEujq6OyOhDKymzAjgQRLx5Pd9BjUNKrlXF0xdgNBUXhnUdR4Zh1EjqMothO3AY16FVK1JstRGDqe8cQe1SLgjrBMo2nkTtr6XBf8R/4tec9gbVXFYWliE0Wooa175WBsynvVgw9k4ba+lwX/Ef+LXmVS08e0MalGm9WoQqIMxJ/oO0k2AHWTPZKg5TtvNUxHwdCeao2LgfvVCL69yg29JbugQe9G8tTG1czXWkp6FO+ijym7XPb1XsO+CiJpFg8kP0+J+wnvGWvKo5Ifp8T9hPeMteTTCIiRSIiBUXLRTPPYVraFKig94dCfeErNpf3KBu8cZgyEA56mecp9VzazJf/UOHeFlBuhBIIIYEqQRYgg2IIPAg6WmsTXSwktu5vJiMCahw7Ipq5M+ZA18ubL6PntIzLPuWB2bXxj4mu9etkao9ixCgDooFFh1aKJ4uYXyV8BPTlnKlRzHugTu7O9eLwtM0sO1NaWY1DmphtSADY+wTx1HLM7m2Z2Z2sLXZmLMdO8mcUUAWHCICIk7uju+2MxCrY8yhDVW6gt/mg+U1rD2nqgXLuvTK4HCqeIo0gfw1ktOKiwsOrScplUNvZSLbPxagXZqFUAd/NtNcSJtIyggg6g6Ga+b5buPgsSyWPMuS1Fuorf5pPlLcA+w9cuJrG2E4MJ2sJwYSi0uTrfLB4XALRxFYo4eowXm6jWVmzDVVI1JJ9smdp8oGz2qYZlrkhKvON+xqCy/B6qX1XXpOo07ZSWSfcskF+fKTs3zhvwKv6ZUW1a4fEV3BzK9SpUBsRcNUYg2Oo0I0kZhsPl1PH+k9EqaRE+ohJAAJYkKABckk2AAHEk9UKsLkhpnnsS3UERfaWYj3TLVmMbi7BOEwoDgc9UPOVO42sq+wfzJmTzOqREQEREBMW3l3Jw2MOZg1Ot/mU7An7YIIb0kX7xMpiBU9Tkja/RxaW76Bv/J5x+SSp52n4B/XLaiWipPkjqedp+Af1zvXkqcaDFJ+Cf1S1IipFW/JW/nSfgn9UfJW/nSfgn9UtKIpFcYHkuphga2Id18mnTCX9JJbT0AemZ1s7Z9OhTFOiiog6h29ZJOpPedZ7YkUiIgJ4dqbNpYik1Osi1EPUeo9RUjVSO0az3RArDaPJLTZiaGJdF8mogqW7gyldPSCe+eL5IannlP+Hb9ctuJaKk+SGp55T/hz+udlLklca/CqZPqD+uWxEVIq35K386T8E/qj5K386T8E/qlpRFIq6nyVvfpYpLd1A3/m0yzd7c3D4TpIGer5b2JHblAsF9mvfMkiSq+xEQEREDr55fKXxEc8vlL4iak0MNndVUAs2gGgubcNes8PTOwbPfIrCmxRuDBCRqxUAkDQlhYDibjtE1wlbY88vlL4iOeXyl8RNUW2TVGX9hU6QLACkxIAbKbgC4sbce0dondS2HVZM+RUUsEXnGWmXaytZA1i2jKdONxa8vPpW1HPL5S+Ijnl8pfETVSvsSujFWw9a4c0dKLEFwSMikCzNodBOT7DrLlz08gKlruMoFmdcr3HRe9N7KdejJz6VtVzy+UviI55fKXxE1F5sdg8I5sdg8I4K2655fKXxEc8vlL4iai82OweEc2OweEcFbdc8vlL4iOeXyl8RNRebHYPCObHYPCOCtuueXyl8RHPL5S+ImovNjsHhHNjsHhHBW3XPL5S+Ijnl8pfETUXmx2Dwjmx2Dwjgrbrnl8pfERzy+UviJqLzY7B4RzY7B4RwVt1zy+UviI55fKXxE1F5sdg8I5sdg8I4K2655fKXxEc8vlL4iaiZV7B4RlXsHhHBW3fPL5S+Ijnl8pfETUXmx2Dwjmx2Dwjgrbrnl8pfERzy+UviJqJlXsHhFl7F8I5K2755fKXxETUXmx2DwiOCuaOVYMpsykMp7CDcHxEmW3ha9xTRQDZAvBUOUFDpmIsg1BXUk66WhYnQSNLaaqoQUhkUqyXqHMCjM6ZiALgM9S4sLhxwygz1YXeJ6ZqsqdOpe5NRsmqZOlTBCuRqVJ4E31sJCREwZGd7WuxFCkC4am3TfWk9R6jILEZTmqP0xqBbruT4do7Z52hSoc2qpRzc1ZySod3d1JPzgcyceHNi3EiRUSQIiJQiIgIiICIiAiIgIiICIiBMNt5icxo4Yte4Jp6j5p69bEqbjh029M+UdvFLZaOHAtlICWzaqRnt862Xhw169bxESCTbbF0ZeYw4DKaZKpY2Ntb9oKix6u+cl21YG2HwlzpfmgbcOF+HC3ot2XMVECXp7fdbgImQixS7BbWQC2UgrYUwQRaxJM5/GJ+ldb5r/vHgS7MLcNTUPADQAcNJCxLB24rEM9Rnbi1vYAoVRrroAB7InVED//Z"  alt="" />
                                    </div>
                                    <div className="about-service-text">
                                        <h4>Provide Supports Everywhichway</h4>
                                        <p>Encourage you travel in different ways </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        <img className='w-50 h-70' src="https://assets.kpmg/is/image/kpmg/white-buildings-near-blue-water-oia-santorini-greece:cq5dam.web.1200.630" alt="" />
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default About;