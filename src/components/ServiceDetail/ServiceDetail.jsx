import React from 'react'
import './ServiceDetail.css'
import { useNavigate, useParams } from 'react-router-dom'

const serviceContent = {
  slippage: {
    title: 'Transmission Slippage',
    description: 'Complete transmission diagnostic and restoration services',
    sections: [
      {
        heading: 'What is Transmission Slippage?',
        content: "Transmission slippage occurs when your vehicle's transmission loses power transfer between the engine and wheels. You might notice the engine RPM increasing without a corresponding increase in vehicle speed, or a loss of power when accelerating.",
      },
      {
        heading: 'Common Signs & Symptoms',
        points: [
          "Engine RPM revs up but vehicle doesn't accelerate proportionally",
          'Delay in response when shifting gears',
          'Burning smell from the transmission',
          'Vehicle jerking or hesitation during acceleration',
          "Difficulty maintaining speed on hills",
          "Transmission fluid leaks",
          'Check Engine Light illuminated'
        ]
      },
      {
        heading: 'Causes of Transmission Slippage',
        points: [
          '<b>Low Transmission Fluid:</b> The most common cause. Low fluid reduces hydraulic pressure needed for gear engagement.',
          '<b>Worn Transmission Fluid:</b> Old, burnt, or dirty fluid loses its protective properties.',
          "<b>Worn Clutch Plates:</b> In manual transmissions, worn clutches can't grip properly.",
          '<b>Damaged Bands:</b> Transmission bands that hold gears can wear or break over time.',
          '<b>Internal Component Wear:</b> Seals, gaskets, and internal parts may deteriorate.',
          '<b>Transmission Overheating:</b> Can damage internal components and fluid.'
        ]
      },
      {
        heading: 'Why You Should Address It',
        content: "Transmission slippage is not something you should ignore. Continuing to drive with a slipping transmission can cause:",
        points: [
          'Accelerated wear to transmission components',
          'Complete transmission failure, which is very expensive to repair or replace',
          'Safety concerns due to lack of vehicle control',
          'Reduced fuel efficiency'
        ]
      },
      {
        heading: 'Our Solution',
        content: "At AutoFix, our ASE-certified technicians will:",
        points: [
          'Perform a complete transmission diagnostic to identify the root cause',
          'Check transmission fluid level, color, and condition',
          'Scan for diagnostic trouble codes',
          "Test drive your vehicle to confirm the issue",
          'Recommend the best repair solution for your specific situation'
        ],
        conclusion: " Solutions may range from a simple fluid and filter change to more extensive repairs, depending on what our diagnostics reveal."
      }
    ]
  },
  rebuilds: {
    title: 'Transmission Rebuilds',
    description: 'Complete transmission rebuild and restoration services',
    sections: [
      {
        heading: 'What is a Transmission Rebuild?',
        content: 'A transmission rebuild involves disassembling your transmission, inspecting all internal components, replacing worn parts, and reassembling it to factory specifications. This restores your transmission to like-new condition.'
      },
      {
        heading: 'When Do You Need a Rebuild?',
        points: [
          'Complete transmission failure',
          'Multiple internal component failures',
          'Severe wear on gears, bands, or clutches',
          'Persistent transmission problems after diagnostics',
          'As a cost-effective alternative to replacement'
        ]
      },
      {
        heading: 'Our Rebuild Process',
        points: [
          'Complete diagnostic evaluation of all components',
          'Careful disassembly and documentation',
          'Replacement of all worn and damaged parts',
          'Precision reassembly to factory specifications',
          'Comprehensive testing before reinstallation',
          'Full system testing in your vehicle'
        ]
      },
      {
        heading: 'Benefits of Choosing AutoFix',
        points: [
          'ASE Certified technicians with years of experience',
          'Quality parts and workmanship',
          'Warranty on rebuilt transmissions',
          'More affordable than transmission replacement',
          'Environmentally responsible approach'
        ]
      }
    ]
  },
  diagnostics: {
    title: 'Transmission Diagnostics',
    description: 'Advanced transmission diagnostic services',
    sections: [
      {
        heading: 'What is Transmission Diagnostics?',
        content: 'Transmission diagnostics is a comprehensive analysis of your transmission system to identify problems, their causes, and the best repair solutions. We use state-of-the-art equipment and expert knowledge to pinpoint issues.'
      },
      {
        heading: 'Why Get Your Transmission Diagnosed?',
        points: [
          'Identify problems before they become catastrophic',
          'Determine the most cost-effective repair solution',
          'Avoid unnecessary and expensive repairs',
          'Prevent potential safety issues',
          'Understand your transmission\'s condition'
        ]
      },
      {
        heading: 'Our Diagnostic Process',
        points: [
          'Visual inspection of transmission and fluid',
          'Computer scanning for trouble codes',
          'Fluid analysis for contaminants and wear',
          'Test drive evaluation',
          'Pressure and performance testing',
          'Detailed written report with recommendations'
        ]
      },
      {
        heading: 'What We Discover',
        points: [
          'Fluid condition and leaks',
          'Internal component wear',
          'Electrical system issues',
          'Solenoid and sensor problems',
          'Torque converter issues',
          'Root causes of transmission problems'
        ]
      }
    ]
  },
  'limp-mode': {
    title: 'Limp Mode Service',
    description: 'Limp mode detection and repair services',
    sections: [
      {
        heading: 'What is Limp Mode?',
        content: 'Limp mode (also called "safe mode" or "failsafe mode") is a protective feature your transmission activates when it detects a problem. In this mode, your transmission limits operation to prevent further damage, resulting in reduced power and performance.'
      },
      {
        heading: 'Signs Your Transmission is in Limp Mode',
        points: [
          'Check Engine Light illuminated',
          'Loss of power and acceleration',
          'Transmission stuck in one gear',
          'Unable to shift properly',
          'Reduced fuel efficiency',
          'Vehicle feels sluggish'
        ]
      },
      {
        heading: 'Common Causes',
        points: [
          'Low transmission fluid',
          'Faulty solenoids',
          'Sensor malfunctions',
          'Electrical connection issues',
          'Internal transmission problems',
          'Torque converter issues'
        ]
      },
      {
        heading: 'Our Solution',
        points: [
          'Complete diagnostic scan to identify the code',
          'Inspect all sensors and solenoids',
          'Check fluid level and condition',
          'Test electrical connections',
          'Repair or replace faulty components',
          'Clear codes and verify fix',
          'Test drive to confirm normal operation'
        ]
      }
    ]
  },
  jerking: {
    title: 'Transmission Jerking & Hesitation',
    description: 'Diagnosis and repair of jerking and hesitation issues',
    sections: [
      {
        heading: 'What Causes Transmission Jerking?',
        content: 'Transmission jerking or hesitation occurs when gears don\'t engage smoothly or power delivery is interrupted. This can feel like the vehicle is surging, bucking, or hesitating during acceleration or gear changes.'
      },
      {
        heading: 'Common Symptoms',
        points: [
          'Vehicle jerks during acceleration',
          'Hesitation when shifting gears',
          'Rough or clunky gear changes',
          'Surging feeling while driving',
          'Delayed response when pressing the gas pedal',
          'Vibration through the steering wheel'
        ]
      },
      {
        heading: 'Possible Causes',
        points: [
          'Low or dirty transmission fluid',
          'Worn engine mounts',
          'Faulty spark plugs',
          'Fuel system issues',
          'Transmission solenoid problems',
          'Worn transmission bands or clutches',
          'Torque converter issues'
        ]
      },
      {
        heading: 'How We Fix It',
        points: [
          'Complete vehicle diagnostics',
          'Transmission fluid inspection and analysis',
          'Solenoid and sensor testing',
          'Engine performance evaluation',
          'Road test evaluation',
          'Repair or replacement of faulty components',
          'Verification of smooth operation'
        ]
      }
    ]
  },
  overheating: {
    title: 'Transmission Overheating',
    description: 'Transmission cooling system diagnosis and repair',
    sections: [
      {
        heading: 'Why Transmission Overheating is Dangerous',
        content: 'Transmission fluid acts as both a lubricant and coolant. When your transmission overheats, the fluid breaks down, losing its protective properties. This leads to accelerated wear, component failure, and potential transmission breakdown.'
      },
      {
        heading: 'Signs of Overheating',
        points: [
          'Burning smell from the transmission',
          'Transmission fluid appears dark or burnt',
          'Check Engine Light or transmission warning light',
          'Loss of power or jerking',
          'Visible smoke under the vehicle',
          'Transmission slipping',
          'Delayed response to gear shifts'
        ]
      },
      {
        heading: 'Common Causes',
        points: [
          'Low transmission fluid level',
          'Dirty or clogged transmission cooler',
          'Failed transmission cooler',
          'Radiator issues affecting cooling flow',
          'Extended towing without adequate cooling',
          'Heavy traffic or constant gear shifting',
          'Internal transmission problems generating excess heat'
        ]
      },
      {
        heading: 'Our Repair Process',
        points: [
          'Check transmission fluid level and condition',
          'Inspect transmission cooler for blockages',
          'Test cooling system efficiency',
          'Evaluate transmission temperature',
          'Clean or replace transmission cooler if needed',
          'Perform fluid and filter service',
          'Test under load to verify proper cooling'
        ]
      }
    ]
  },
  chattering: {
    title: 'Transmission Chattering & Shuddering',
    description: 'Chattering and shuddering noise diagnosis and repair',
    sections: [
      {
        heading: 'What is Transmission Chattering?',
        content: 'Transmission chattering or shuddering is a vibration or grinding noise that occurs during gear shifts or while driving. It can feel like the transmission is struggling to engage properly, often accompanied by unusual sounds.'
      },
      {
        heading: 'Common Symptoms',
        points: [
          'Grinding or chattering noise during shifts',
          'Vibration felt through the steering wheel or seat',
          'Shuddering during acceleration',
          'Metallic sounds from the transmission',
          'Noise occurs during specific gears only',
          'Worse when the vehicle is cold'
        ]
      },
      {
        heading: 'Possible Causes',
        points: [
          'Low or dirty transmission fluid',
          'Worn transmission bands or clutches',
          'Damaged gears or gear teeth',
          'Torque converter issues',
          'Engine mount problems',
          'Worn motor mounts',
          'Internal bearing wear',
          'Solenoid malfunction'
        ]
      },
      {
        heading: 'Our Solution',
        points: [
          'Listen to the noise to identify the source',
          'Check transmission fluid condition and level',
          'Perform computer diagnostics',
          'Inspect engine and transmission mounts',
          'Road test to evaluate symptoms',
          'Internal inspection if needed',
          'Replace worn components',
          'Verify smooth operation'
        ]
      }
    ]
  },
  leaks: {
    title: 'Transmission Leaks',
    description: 'Transmission leak detection and repair',
    sections: [
      {
        heading: 'Why Transmission Leaks Matter',
        content: 'Transmission fluid is critical for operation and protection. Even small leaks can lead to low fluid levels, causing slipping, overheating, and eventual transmission failure. Identifying and fixing leaks early prevents costly repairs.'
      },
      {
        heading: 'Signs of a Transmission Leak',
        points: [
          'Red or pink fluid under your vehicle',
          'Transmission slipping or hesitation',
          'Burning transmission smell',
          'Transmission temperature warning light',
          'Check Engine Light',
          'Grinding or unusual transmission noises',
          'Loss of power during acceleration'
        ]
      },
      {
        heading: 'Common Leak Sources',
        points: [
          'Worn transmission pan gasket',
          'Leaking transmission cooler lines',
          'Failed transmission seal',
          'Cracked or damaged transmission case',
          'Worn axle seals',
          'Defective driveshaft seal',
          'Leaking transmission housing bolts',
          'Overfilled transmission'
        ]
      },
      {
        heading: 'How We Repair It',
        points: [
          'Locate the source of the leak using visual inspection',
          'Clean the transmission area to confirm leak location',
          'Road test to identify leak under pressure',
          'Replace failed gaskets or seals',
          'Repair or replace damaged cooler lines',
          'Refill with proper transmission fluid',
          'Verify repair with extended test drive',
          'Monitor for any recurring leaks'
        ]
      }
    ]
  },
  'bad-shifting': {
    title: 'Bad Transmission Shifts',
    description: 'Shift quality diagnosis and repair',
    sections: [
      {
        heading: 'What are Bad Transmission Shifts?',
        content: 'Bad or rough transmission shifts occur when your vehicle doesn\'t smoothly transition between gears. You might experience delays, jerking, grinding, or hard shifts that make for an uncomfortable driving experience.'
      },
      {
        heading: 'Types of Shift Problems',
        points: [
          'Delayed shifts - transmission takes too long to engage',
          'Hard shifts - abrupt, forceful gear changes',
          'Slipping shifts - loss of power during shift',
          'Rough shifts - noisy or grinding shifts',
          'No shift - transmission won\'t change gears',
          'Shift flare - engine RPM spikes during shift'
        ]
      },
      {
        heading: 'Common Causes',
        points: [
          'Low or dirty transmission fluid',
          'Worn transmission bands or clutches',
          'Faulty shift solenoids',
          'Transmission control module issues',
          'Engine performance problems',
          'Worn motor mounts',
          'Throttle position sensor malfunction',
          'Transmission line pressure issues'
        ]
      },
      {
        heading: 'Our Diagnostic & Repair Process',
        points: [
          'Test drive to evaluate shift quality',
          'Computer diagnostic scan',
          'Transmission fluid analysis',
          'Solenoid and sensor testing',
          'Engine performance check',
          'Pressure testing',
          'Replace solenoids or repair internal issues as needed',
          'Verify smooth shifting after repairs'
        ]
      }
    ]
  },
  'check-engine': {
    title: 'Check Engine Light - General Repair',
    description: 'Diagnostic and repair of Check Engine Light issues',
    sections: [
      {
        heading: 'What Does the Check Engine Light Mean?',
        content: 'Your vehicle\'s Check Engine Light indicates that the onboard diagnostic system has detected a problem with the engine, transmission, emissions system, or related components. It\'s important to get it diagnosed promptly.'
      },
      {
        heading: 'Common Issues Causing Check Engine Light',
        points: [
          'Faulty oxygen sensor',
          'Loose or damaged gas cap',
          'Catalytic converter problems',
          'Engine misfires',
          'Transmission issues',
          'EVAP system leaks',
          'Spark plug problems',
          'Mass air flow sensor malfunction'
        ]
      },
      {
        heading: 'Why You Should Address It',
        points: [
          'Identify potentially serious engine problems early',
          'Prevent further damage and expensive repairs',
          'Improve fuel efficiency and performance',
          'Ensure emissions compliance',
          'Maintain vehicle reliability',
          'Address safety concerns'
        ]
      },
      {
        heading: 'Our Diagnostic Process',
        points: [
          'Connect vehicle to diagnostic scanner',
          'Read diagnostic trouble codes (DTCs)',
          'Physical inspection of related systems',
          'Road test evaluation',
          'Component testing if needed',
          'Repair or replace faulty parts',
          'Clear codes and verify fix',
          'Confirm Check Engine Light is off'
        ]
      }
    ]
  },
  suspension: {
    title: 'Suspension Service',
    description: 'Complete suspension diagnosis and repair',
    sections: [
      {
        heading: 'Why Suspension Service is Important',
        content: 'Your vehicle\'s suspension system affects handling, comfort, safety, and tire wear. Regular maintenance and timely repairs keep your vehicle performing safely and smoothly.'
      },
      {
        heading: 'Signs of Suspension Problems',
        points: [
          'Rough or bumpy ride',
          'Excessive bouncing after bumps',
          'Vehicle pulls to one side',
          'Uneven tire wear',
          'Clunking or rattling noises',
          'Difficulty steering or stiff steering',
          'Nose dives when braking',
          'Vehicle leans during turns'
        ]
      },
      {
        heading: 'Common Suspension Components We Service',
        points: [
          'Shock absorbers and struts',
          'Springs and coils',
          'Control arms and ball joints',
          'Tie rods and steering linkage',
          'Sway bars and bushings',
          'Wheel bearings',
          'Suspension bushings',
          'Alignment service'
        ]
      },
      {
        heading: 'Our Suspension Services',
        points: [
          'Complete suspension inspection',
          'Alignment check and service',
          'Shock and strut replacement',
          'Spring and coil service',
          'Control arm repair',
          'Bearing replacement',
          'Bushing replacement',
          'Steering component repair'
        ]
      }
    ]
  },
  'engine-service': {
    title: 'Engine Service',
    description: 'Comprehensive engine maintenance and repair',
    sections: [
      {
        heading: 'Why Regular Engine Service Matters',
        content: 'Your engine is the heart of your vehicle. Regular maintenance and timely repairs keep your engine running smoothly, efficiently, and reliably for years to come.'
      },
      {
        heading: 'Engine Service Includes',
        points: [
          'Oil and filter changes',
          'Spark plug replacement',
          'Air filter changes',
          'Fuel filter service',
          'Coolant system service',
          'Belt and hose inspection',
          'Fluid level checks',
          'Performance diagnostics'
        ]
      },
      {
        heading: 'Common Engine Problems We Fix',
        points: [
          'Misfiring or rough idle',
          'Loss of power or poor acceleration',
          'Overheating issues',
          'Unusual engine noises',
          'Oil leaks and fluid leaks',
          'Failed sensors',
          'Faulty spark plugs',
          'Water pump failures'
        ]
      },
      {
        heading: 'Our Engine Service Process',
        points: [
          'Listen to engine symptoms',
          'Computer diagnostics',
          'Visual inspection',
          'Performance testing',
          'Identify root cause',
          'Perform necessary repairs',
          'Replace worn components',
          'Verify smooth engine operation'
        ]
      }
    ]
  },
  maintenance: {
    title: 'Preventative Maintenance',
    description: 'Keep your vehicle running at peak performance',
    sections: [
      {
        heading: 'Why Preventative Maintenance?',
        content: 'Regular preventative maintenance is the best way to keep your vehicle reliable, maintain its value, and avoid expensive repairs. Staying on top of maintenance extends your vehicle\'s lifespan significantly.'
      },
      {
        heading: 'Routine Maintenance Services',
        points: [
          'Oil and filter changes every 3,000-7,500 miles',
          'Air filter replacement',
          'Cabin air filter replacement',
          'Spark plug replacement',
          'Fluid level checks',
          'Battery testing and replacement',
          'Tire rotation and balancing',
          'Wiper blade replacement'
        ]
      },
      {
        heading: 'Scheduled Service Items',
        points: [
          'Transmission fluid service',
          'Coolant system flush',
          'Power steering fluid service',
          'Brake fluid service',
          'Differential fluid service',
          'Fuel system cleaning',
          'Belt and hose inspection',
          'Alignment check'
        ]
      },
      {
        heading: 'Benefits of Regular Maintenance',
        points: [
          'Improved fuel efficiency and performance',
          'Extended vehicle lifespan',
          'Increased safety and reliability',
          'Lower repair costs in the long run',
          'Maintained manufacturer warranty',
          'Better resale value',
          'Predictable maintenance costs',
          'Peace of mind'
        ]
      }
    ]
  },
  brakes: {
    title: 'Brake Service',
    description: 'Professional brake inspection, repair, and replacement',
    sections: [
      {
        heading: 'Why Brake Service is Critical',
        content: 'Your brakes are one of the most important safety systems on your vehicle. Properly maintained brakes ensure you can stop safely when needed. Don\'t put off brake service.'
      },
      {
        heading: 'Signs You Need Brake Service',
        points: [
          'Brake warning light illuminated',
          'Soft or spongy brake pedal',
          'Brake pedal goes to the floor',
          'Squealing or grinding noises when braking',
          'Pulsation or vibration in the pedal',
          'Vehicle pulls to one side when braking',
          'Longer stopping distance than normal',
          'Burning smell when braking'
        ]
      },
      {
        heading: 'Brake System Components We Service',
        points: [
          'Brake pads and rotors',
          'Brake calipers',
          'Brake cylinders',
          'Master cylinder',
          'Brake lines and hoses',
          'Brake fluid flush and fill',
          'ABS systems',
          'Parking brake service'
        ]
      },
      {
        heading: 'Our Brake Service Process',
        points: [
          'Complete brake system inspection',
          'Brake pad thickness measurement',
          'Rotor condition evaluation',
          'Brake fluid testing',
          'ABS system diagnostics',
          'Replace worn brake components',
          'Brake fluid service if needed',
          'Road test to verify proper braking'
        ]
      }
    ]
  },
  'ac-heating': {
    title: 'AC & Heating Service',
    description: 'Climate control system repair and service',
    sections: [
      {
        heading: 'AC and Heating System Importance',
        content: 'Your vehicle\'s air conditioning and heating systems provide comfort and safety. Proper climate control keeps you comfortable in any season and helps maintain clear windows for safe visibility.'
      },
      {
        heading: 'Common AC and Heating Problems',
        points: [
          'Air conditioning not blowing cold',
          'Heat not working or weak heat',
          'Reduced airflow',
          'Strange odors from vents',
          'Loud noises from HVAC system',
          'Compressor not engaging',
          'Refrigerant leak',
          'Thermostat malfunction'
        ]
      },
      {
        heading: 'AC and Heating Components We Service',
        points: [
          'Air conditioning compressor',
          'Condenser and evaporator',
          'Refrigerant and oil',
          'Blower motor and fan',
          'Heater core',
          'Thermostat and blend door',
          'Cabin air filter',
          'Refrigerant hoses and connections'
        ]
      },
      {
        heading: 'Our Service Process',
        points: [
          'Diagnose the problem with precision equipment',
          'Check refrigerant level and pressure',
          'Inspect compressor clutch operation',
          'Test blower motor functionality',
          'Evaluate heating core operation',
          'Recharge refrigerant if needed',
          'Replace faulty components',
          'Verify proper AC and heating operation'
        ]
      }
    ]
  },
  electrical: {
    title: 'Electrical System Service',
    description: 'Electrical diagnosis and repair services',
    sections: [
      {
        heading: 'Why Electrical System Service Matters',
        content: 'Your vehicle\'s electrical system powers everything from starting the engine to operating lights, sensors, and accessories. Problems here can affect many vehicle systems.'
      },
      {
        heading: 'Common Electrical Problems',
        points: [
          'Battery won\'t hold a charge',
          'Vehicle won\'t start',
          'Alternator not charging',
          'Dim or flickering lights',
          'Electrical accessories not working',
          'Fuses blowing repeatedly',
          'Dead battery while parked',
          'Starter motor problems'
        ]
      },
      {
        heading: 'Electrical Components We Service',
        points: [
          'Battery testing and replacement',
          'Alternator repair and replacement',
          'Starter motor service',
          'Wiring and connections',
          'Fuses and relays',
          'Electrical switches and sensors',
          'Charging system testing',
          'Ground connections'
        ]
      },
      {
        heading: 'Our Electrical Service Process',
        points: [
          'Battery testing with professional equipment',
          'Alternator output testing',
          'Starter motor function testing',
          'Voltage and amperage measurements',
          'Visual inspection of wiring and connections',
          'Computer diagnostics for sensor issues',
          'Replace or repair faulty components',
          'Verify all electrical systems working properly'
        ]
      }
    ]
  },
  steering: {
    title: 'Steering System Service',
    description: 'Power steering and steering component repair',
    sections: [
      {
        heading: 'Why Steering Service is Important',
        content: 'Your vehicle\'s steering system is critical for control and safety. Proper maintenance ensures responsive, predictable steering in all driving conditions.'
      },
      {
        heading: 'Signs of Steering Problems',
        points: [
          'Steering wheel is stiff or hard to turn',
          'Steering feels loose or lacks response',
          'Steering wheel vibrates or shakes',
          'Steering wheel doesn\'t center properly',
          'Vehicle pulls to one side',
          'Whining noise when turning',
          'Power steering fluid leak',
          'Difficulty turning at low speeds'
        ]
      },
      {
        heading: 'Steering Components We Service',
        points: [
          'Power steering pump',
          'Steering rack and pinion',
          'Steering column and shaft',
          'Tie rods and ball joints',
          'Power steering hoses',
          'Power steering fluid',
          'Steering wheel alignment',
          'Idler arm and pitman arm'
        ]
      },
      {
        heading: 'Our Steering Service Process',
        points: [
          'Check power steering fluid level and condition',
          'Inspect steering components for wear',
          'Test power steering pump pressure',
          'Evaluate steering response and feel',
          'Check wheel alignment',
          'Replace worn steering components',
          'Power steering fluid service if needed',
          'Road test to verify proper steering'
        ]
      }
    ]
  }
}

const ServiceDetail = () => {
  const navigate = useNavigate()
  const { serviceId } = useParams()
  
  const service = serviceContent[serviceId] || serviceContent.rebuilds
  
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])
  
  return (
    <div className="service-detail container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      
      <div className="service-detail-content">
        <h1>{service.title}</h1>
        <p className="service-description">{service.description}</p>
        
        {service.sections.map((section, index) => (
          <section key={index} className="detail-section">
            <h2>{section.heading}</h2>
            {section.content && <p>{section.content}</p>}
            {section.points && (
              <ul>
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="detail-section cta-section">
          <h2>Ready to Get Started?</h2>
          <button
            className="btn"
            onClick={() => {
              navigate('/'); // navigate first
              setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }, 100); // small delay to let the new page render
            }}
          >
            Schedule Service
          </button>
        </section>
      </div>
    </div>
  )
}

export default ServiceDetail
