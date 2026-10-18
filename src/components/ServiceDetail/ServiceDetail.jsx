import React from 'react'
import './ServiceDetail.css'
import { useNavigate, useParams } from 'react-router-dom'

const serviceContent = {
  rebuilds: {
    title: 'TRANSMISSION REBUILDS',
    description: 'Complete transmission rebuild and restoration services',
    sections: [
      {
        heading: 'WHAT IS A TRANSMISSION REBUILD?',
        content: 'A transmission rebuild involves disassembling your transmission, inspecting all internal components, replacing worn parts, and reassembling it to factory specifications. This restores your transmission to like-new condition.'
      },
      {
        heading: 'WHEN DO YOU NEED A TRANSMISSION REBUILD?',
        points: [
          'Complete transmission failure',
          'Multiple internal component failures',
          'Severe wear on gears, bands, or clutches',
          'Persistent transmission problems after diagnostics',
          'As a cost-effective alternative to replacement'
        ]
      },
      {
        heading: 'OUR REBUILD PROCESS',
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
        heading: 'BENEFITS OF CHOOSING AUTOFIX',
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
    title: 'TRANSMISSION DIAGNOSTICS',
    description: 'Advanced transmission diagnostic services',
    sections: [
      {
        heading: 'WHAT IS TRANSMISSION DIAGNOSTICS?',
        content: 'Transmission diagnostics is a comprehensive analysis of your transmission system to identify problems, their causes, and the best repair solutions. We use state-of-the-art equipment and expert knowledge to pinpoint issues.'
      },
      {
        heading: 'WHY GET YOUR TRANSMISSION DIAGNOSED?',
        points: [
          'Identify problems before they become catastrophic',
          'Determine the most cost-effective repair solution',
          'Avoid unnecessary and expensive repairs',
          'Prevent potential safety issues',
          'Understand your transmission\'s condition'
        ]
      },
      {
        heading: 'OUR DIAGNOSTIC PROCESS',
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
        heading: 'WHAT WE DISCOVER',
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
    title: 'LIMP MODE SERVICE',
    description: 'Limp mode detection and repair services',
    sections: [
      {
        heading: 'WHAT IS LIMP MODE?',
        content: 'Limp mode (also called "safe mode" or "failsafe mode") is a protective feature your transmission activates when it detects a problem. In this mode, your transmission limits operation to prevent further damage, resulting in reduced power and performance.'
      },
      {
        heading: 'SIGNS YOUR TRANSMISSION IS IN LIMP MODE',
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
        heading: 'COMMON CAUSES',
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
        heading: 'OUR SOLUTION',
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
    title: 'TRANSMISSION JERKING',
    description: 'Diagnosis and repair of jerking and hesitation issues',
    sections: [
      {
        heading: 'WHAT CAUSES TRANSMISSION JERKING?',
        content: 'Transmission jerking or hesitation occurs when gears don\'t engage smoothly or power delivery is interrupted. This can feel like the vehicle is surging, bucking, or hesitating during acceleration or gear changes.'
      },
      {
        heading: 'COMMON SYMPTOMS OF JERKING',
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
        heading: 'POSSIBLE CAUSES',
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
        heading: 'HOW WE FIX IT',
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
    title: 'TRANSMISSION OVERHEATING',
    description: 'Transmission cooling system diagnosis and repair',
    sections: [
      {
        heading: 'WHY TRANSMISSION OVERHEATING IS DANGEROUS',
        content: 'Transmission fluid acts as both a lubricant and coolant. When your transmission overheats, the fluid breaks down, losing its protective properties. This leads to accelerated wear, component failure, and potential transmission breakdown.'
      },
      {
        heading: 'SIGNS OF OVERHEATING',
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
        heading: 'COMMON CAUSES',
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
        heading: 'OUR REPAIR PROCESS',
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
    title: 'TRANSMISSION CHATTERING',
    description: 'Chattering and shuddering noise diagnosis and repair',
    sections: [
      {
        heading: 'WHAT IS TRANSMISSION CHATTERING?',
        content: 'Transmission chattering or shuddering is a vibration or grinding noise that occurs during gear shifts or while driving. It can feel like the transmission is struggling to engage properly, often accompanied by unusual sounds.'
      },
      {
        heading: 'COMMON SYMPTOMS',
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
        heading: 'POSSIBLE CAUSES',
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
        heading: 'OUR SOLUTION',
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
    title: 'TRANSMISSION LEAKS',
    description: 'Transmission leak detection and repair',
    sections: [
      {
        heading: 'WHY TRANSMISSION LEAKS MATTER',
        content: 'Transmission fluid is critical for operation and protection. Even small leaks can lead to low fluid levels, causing slipping, overheating, and eventual transmission failure. Identifying and fixing leaks early prevents costly repairs.'
      },
      {
        heading: 'SIGNS OF A TRANSMISSION LEAK',
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
        heading: 'COMMON LEAK SOURCES',
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
        heading: 'HOW WE REPAIR IT',
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
  generalleaks: {
    title: 'GENERAL LEAKS',
    description: 'Leak detection and repair for all major vehicle systems',
    sections: [
      {
        heading: 'WHY FLUID LEAKS MATTER',
        content: 'Your vehicle relies on several critical fluids to operate safely and efficiently. Leaks can lead to low fluid levels, overheating, poor performance, and damage to major components. Identifying and repairing leaks early helps prevent costly repairs and keeps your vehicle running reliably.'
      },
      {
        heading: 'SIGNS OF A LEAK',
        points: [
        'Puddles or spots under your vehicle',
        'Unusual smells such as burning oil or sweet coolant',
        'Low fluid levels between services',
        'Dashboard warning lights',
        'Overheating engine',
        'Steering becoming stiff or noisy',
        'Visible fluid residue around engine or components'
        ]
      },
      {
        heading: 'COMMON LEAK SOURCES',
        points: [
        'Engine oil pan gasket or valve cover gasket',
        'Radiator or coolant hoses',
        'Water pump or thermostat housing',
        'Transmission pan gasket or seals',
        'Power steering lines or pump',
        'Brake lines or brake components',
        'Differential or axle seals',
        'Worn hoses, clamps, or fittings'
        ]
      },
      {
        heading: 'HOW WE REPAIR IT',
        points: [
        'Perform a full visual inspection to locate the leak',
        'Clean affected areas to accurately trace the source',
        'Use dye or pressure testing when needed',
        'Replace worn gaskets, seals, or damaged components',
        'Repair or replace leaking hoses or lines',
        'Refill and properly bleed affected systems',
        'Test drive and recheck for leaks',
        'Verify fluid levels and system operation'
        ]
      }
    ]
  },
  'bad-shifting': {
    title: 'BAD TRANSMISSION SHIFTS',
    description: 'Shift quality diagnosis and repair',
    sections: [
      {
        heading: 'WHAT ARE BAD TRANSMISSION SHIFTS?',
        content: 'Bad or rough transmission shifts occur when your vehicle doesn\'t smoothly transition between gears. You might experience delays, jerking, grinding, or hard shifts that make for an uncomfortable driving experience.'
      },
      {
        heading: 'TYPES OF SHIFT PROBLEMS',
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
        heading: 'COMMON CAUSES',
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
        heading: 'OUR DIAGNOSTIC & REPAIR PROCESS',
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
    title: 'CHECK ENGINE LIGHT',
    description: 'Diagnostic and repair of Check Engine Light issues',
    sections: [
      {
        heading: 'WHAT DOES THE CHECK ENGINE LIGHT MEAN?',
        content: 'Your vehicle\'s Check Engine Light indicates that the onboard diagnostic system has detected a problem with the engine, transmission, emissions system, or related components. It\'s important to get it diagnosed promptly.'
      },
      {
    heading: 'COMMON ISSUES CAUSING CHECK ENGINE LIGHT',
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
        heading: 'WHY YOU SHOULD ADDRESS IT',
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
        heading: 'OUR DIAGNOSTIC PROCESS',
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
    title: 'SUSPENSION SERVICE',
    description: 'Complete suspension diagnosis and repair',
    sections: [
      {
        heading: 'WHY SUSPENSION SERVICE IS IMPORTANT',
        content: 'Your vehicle\'s suspension system affects handling, comfort, safety, and tire wear. Regular maintenance and timely repairs keep your vehicle performing safely and smoothly.'
      },
      {
        heading: 'SIGNS OF SUSPENSION PROBLEMS',
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
        heading: 'COMMON SUSPENSION COMPONENTS WE SERVICE',
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
        heading: 'OUR SUSPENSION SERVICES',
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
    title: 'ENGINE SERVICE',
    description: 'Comprehensive engine maintenance and repair',
    sections: [
      {
        heading: 'WHY REGULAR ENGINE SERVICE MATTERS',
        content: 'Your engine is the heart of your vehicle. Regular maintenance and timely repairs keep your engine running smoothly, efficiently, and reliably for years to come.'
      },
      {
        heading: 'ENGINE SERVICE INCLUDES',
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
        heading: 'COMMON ENGINE PROBLEMS WE FIX',
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
        heading: 'OUR ENGINE SERVICE PROCESS',
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
    title: 'PREVENTATIVE MAINTENANCE',
    description: 'Keep your vehicle running at peak performance',
    sections: [
      {
        heading: 'WHY PREVENTATIVE MAINTENANCE?',
        content: 'Regular preventative maintenance is the best way to keep your vehicle reliable, maintain its value, and avoid expensive repairs. Staying on top of maintenance extends your vehicle\'s lifespan significantly.'
      },
      {
        heading: 'ROUTINE MAINTENANCE SERVICES',
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
        heading: 'SCHEDULED SERVICE ITEMS',
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
        heading: 'BENEFITS OF REGULAR MAINTENANCE',
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
    title: 'BRAKE SERVICE',
    description: 'Professional brake inspection, repair, and replacement',
    sections: [
      {
        heading: 'WHY BRAKE SERVICE IS CRITICAL',
        content: 'Your brakes are one of the most important safety systems on your vehicle. Properly maintained brakes ensure you can stop safely when needed. Don\'t put off brake service.'
      },
      {
        heading: 'SIGNS YOU NEED BRAKE SERVICE',
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
        heading: 'BRAKE SYSTEM COMPONENTS WE SERVICE',
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
        heading: 'OUR BRAKE SERVICE PROCESS',
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
    title: 'AC & HEATING SERVICE',
    description: 'Climate control system repair and service',
    sections: [
      {
        heading: 'AC & HEATING SYSTEM IMPORTANCE',
        content: 'Your vehicle\'s air conditioning and heating systems provide comfort and safety. Proper climate control keeps you comfortable in any season and helps maintain clear windows for safe visibility.'
      },
      {
        heading: 'COMMON AC & HEATING PROBLEMS',
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
        heading: 'AC & HEATING COMPONENTS WE SERVICE',
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
        heading: 'OUR SERVICE PROCESS',
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
    title: 'ELECTRICAL SYSTEM SERVICE',
    description: 'Electrical diagnosis and repair services',
    sections: [
      {
        heading: 'WHY ELECTRICAL SYSTEM SERVICE MATTERS',
        content: 'Your vehicle\'s electrical system powers everything from starting the engine to operating lights, sensors, and accessories. Problems here can affect many vehicle systems.'
      },
      {
        heading: 'COMMON ELECTRICAL PROBLEMS',
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
        heading: 'ELECTRICAL COMPONENTS WE SERVICE',
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
        heading: 'OUR ELECTRICAL SERVICE PROCESS',
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
    title: 'STEERING SYSTEM SERVICE',
    description: 'Power steering and steering component repair',
    sections: [
      {
        heading: 'WHY STEERING SERVICE IS IMPORTANT',
        content: 'Your vehicle\'s steering system is critical for control and safety. Proper maintenance ensures responsive, predictable steering in all driving conditions.'
      },
      {
        heading: 'SIGNS OF STEERING PROBLEMS',
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
        heading: 'STEERING COMPONENTS WE SERVICE',
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
        heading: 'OUR STEERING SERVICE PROCESS',
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
          <h2>Ready To Get Started?</h2>
          <button className="btn" onClick={() => navigate('/#contact')}>Schedule Service</button>
        </section>
      </div>
    </div>
  )
}

export default ServiceDetail
