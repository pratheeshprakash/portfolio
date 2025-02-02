interface Translation {
  personal: {
    title: string;
    summary: string;
  };
  sections: {
    projectTimeline: string;
    getInTouch: string;
    overview: string;
    technologies: string;
    architecture: string;
  };
  contact: {
    name: string;
    email: string;
    message: string;
    sendMessage: string;
    sending: string;
    success: string;
    error: string;
  };
  projects: {
    [key: string]: {
      title: string;
      description: string;
      detailedOverview: string;
    };
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    personal: {
      title: "Robotics & Embedded Systems Engineer",
      summary: "Pioneering the future of robotics and embedded systems with over a decade of experience in designing and implementing cutting-edge solutions. Specialized in autonomous systems, real-time control, and hardware optimization.",
    },
    sections: {
      projectTimeline: "Project Timeline",
      getInTouch: "Get in Touch",
      overview: "Overview",
      technologies: "Technologies",
      architecture: "Architecture"
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent successfully.",
      error: "Sorry, something went wrong. Please try again later."
    },
    projects: {
      "baggage-handling-robot": {
        title: "Automated Baggage Handling Robot",
        description: "Developed an intelligent robotic system for automated baggage handling in airports, featuring real-time tracking and smart routing capabilities.",
        detailedOverview: "The Automated Baggage Handling Robot revolutionizes airport logistics with its advanced AI-powered system. It combines computer vision for baggage recognition, smart path planning for efficient routing, and real-time tracking capabilities."
      },
      "autonomous-delivery-robot": {
        title: "Autonomous Delivery Robot",
        description: "Developed an autonomous delivery robot capable of navigating complex indoor environments using SLAM and computer vision.",
        detailedOverview: "Our autonomous delivery robot represents a breakthrough in indoor navigation and delivery automation. The system utilizes advanced SLAM algorithms for real-time mapping and localization, combined with deep learning-based computer vision for obstacle detection and dynamic path planning."
      },
      "smart-factory-control": {
        title: "Smart Factory Control System",
        description: "Designed and implemented a distributed control system for automated manufacturing processes using industrial IoT sensors.",
        detailedOverview: "The Smart Factory Control System revolutionizes manufacturing by implementing a fully distributed architecture. It features real-time monitoring, predictive maintenance, and adaptive process control through a network of IoT sensors and edge computing nodes."
      },
      "prosthetic-hand": {
        title: "Prosthetic Hand Controller",
        description: "Created an embedded system for controlling a prosthetic hand using EMG signals and machine learning.",
        detailedOverview: "This advanced prosthetic hand controller uses EMG signal processing and machine learning to provide intuitive control. The system features real-time pattern recognition, adaptive learning, and haptic feedback for enhanced user experience."
      },
      "drone-swarm": {
        title: "Drone Swarm System",
        description: "Developed coordination algorithms for a swarm of autonomous drones performing collaborative tasks.",
        detailedOverview: "The Drone Swarm System enables multiple autonomous drones to work together seamlessly. The system implements distributed consensus algorithms, collision avoidance, and task allocation for efficient mission execution."
      },
      "robot-arm": {
        title: "Industrial Robot Arm",
        description: "Designed control systems for a 6-DOF robotic arm with real-time path planning and obstacle avoidance.",
        detailedOverview: "This industrial robot arm features advanced control systems with real-time path planning and dynamic obstacle avoidance. The system includes inverse kinematics solving, trajectory optimization, and force feedback control."
      }
    }
  },
  da: {
    personal: {
      title: "Robotteknologi- og Indlejrede Systemer Ingeniør",
      summary: "Baner vejen for fremtidens robotteknologi og indlejrede systemer med over et årtis erfaring i design og implementering af banebrydende løsninger. Specialiseret i autonome systemer, realtidskontrol og hardwareoptimering.",
    },
    sections: {
      projectTimeline: "Projekt Tidslinje",
      getInTouch: "Kontakt Os",
      overview: "Oversigt",
      technologies: "Teknologier",
      architecture: "Arkitektur"
    },
    contact: {
      name: "Navn",
      email: "Email",
      message: "Besked",
      sendMessage: "Send Besked",
      sending: "Sender...",
      success: "Tak! Din besked er blevet sendt.",
      error: "Beklager, noget gik galt. Prøv venligst igen senere."
    },
    projects: {
      "baggage-handling-robot": {
        title: "Automatiseret Bagagehåndteringsrobot",
        description: "Udviklede et intelligent robotsystem til automatiseret bagagehåndtering i lufthavne med realtidssporing og smart ruteplanlægning.",
        detailedOverview: "Den automatiserede bagagehåndteringsrobot revolutionerer lufthavnslogistik med sit avancerede AI-drevne system. Den kombinerer computersyn til bagagegenkendelse, smart ruteplanlægning og realtidssporingsmuligheder."
      },
      "autonomous-delivery-robot": {
        title: "Autonom Leveringsrobot",
        description: "Udviklede en autonom leveringsrobot, der kan navigere i komplekse indendørsmiljøer ved hjælp af SLAM og computersyn.",
        detailedOverview: "Vores autonome leveringsrobot repræsenterer et gennembrud inden for indendørs navigation og leveringsautomatisering. Systemet bruger avancerede SLAM-algoritmer til realtidskortlægning og lokalisering."
      },
      "smart-factory-control": {
        title: "Smart Fabrikskontrolsystem",
        description: "Designede og implementerede et distribueret kontrolsystem til automatiserede produktionsprocesser ved hjælp af industrielle IoT-sensorer.",
        detailedOverview: "Smart Factory-kontrolsystemet revolutionerer fremstilling ved at implementere en fuldt distribueret arkitektur. Det har realtidsovervågning, forudsigende vedligeholdelse og adaptiv proceskontrol."
      },
      "prosthetic-hand": {
        title: "Protesehåndkontroller",
        description: "Skabte et indlejret system til styring af en protesehånd ved hjælp af EMG-signaler og maskinlæring.",
        detailedOverview: "Denne avancerede protesehåndkontroller bruger EMG-signalbehandling og maskinlæring til at give intuitiv kontrol. Systemet har realtidsmønstergenkendelse og adaptiv læring."
      },
      "drone-swarm": {
        title: "Dronesværmsystem",
        description: "Udviklede koordineringsalgoritmer til en sværm af autonome droner, der udfører samarbejdsopgaver.",
        detailedOverview: "Dronesværmsystemet gør det muligt for flere autonome droner at arbejde sammen problemfrit. Systemet implementerer distribuerede konsensusalgoritmer og kollisionsundgåelse."
      },
      "robot-arm": {
        title: "Industriel Robotarm",
        description: "Designede kontrolsystemer til en 6-DOF robotarm med realtids ruteplanlægning og forhindringundgåelse.",
        detailedOverview: "Denne industrielle robotarm har avancerede kontrolsystemer med realtids ruteplanlægning og dynamisk forhindringundgåelse. Systemet inkluderer løsning af invers kinematik."
      }
    }
  },
  de: {
    personal: {
      title: "Robotik- und Embedded-Systems-Ingenieur",
      summary: "Wegbereiter für die Zukunft der Robotik und eingebetteter Systeme mit über einem Jahrzehnt Erfahrung in der Entwicklung und Implementierung modernster Lösungen. Spezialisiert auf autonome Systeme, Echtzeit-Steuerung und Hardware-Optimierung.",
    },
    sections: {
      projectTimeline: "Projekt-Zeitlinie",
      getInTouch: "Kontakt",
      overview: "Überblick",
      technologies: "Technologien",
      architecture: "Architektur"
    },
    contact: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      sendMessage: "Nachricht Senden",
      sending: "Wird gesendet...",
      success: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
      error: "Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut."
    },
    projects: {
      "baggage-handling-robot": {
        title: "Automatisierter Gepäckabfertigungsroboter",
        description: "Entwicklung eines intelligenten Robotersystems für die automatisierte Gepäckabfertigung an Flughäfen mit Echtzeit-Tracking und intelligenter Routenplanung.",
        detailedOverview: "Der automatisierte Gepäckabfertigungsroboter revolutioniert die Flughafenlogistik mit seinem fortschrittlichen KI-gesteuerten System. Er kombiniert maschinelles Sehen für die Gepäckerkennung mit intelligenter Routenplanung."
      },
      "autonomous-delivery-robot": {
        title: "Autonomer Lieferroboter",
        description: "Entwicklung eines autonomen Lieferroboters, der komplexe Innenräume mit SLAM und maschinellem Sehen navigieren kann.",
        detailedOverview: "Unser autonomer Lieferroboter stellt einen Durchbruch in der Indoor-Navigation und Lieferautomatisierung dar. Das System verwendet fortschrittliche SLAM-Algorithmen für Echtzeit-Mapping und Lokalisierung."
      },
      "smart-factory-control": {
        title: "Smart Factory Steuerungssystem",
        description: "Entwicklung und Implementierung eines verteilten Steuerungssystems für automatisierte Fertigungsprozesse mit industriellen IoT-Sensoren.",
        detailedOverview: "Das Smart Factory Steuerungssystem revolutioniert die Fertigung durch eine vollständig verteilte Architektur. Es bietet Echtzeit-Überwachung und vorausschauende Wartung."
      },
      "prosthetic-hand": {
        title: "Prothesenhand-Controller",
        description: "Entwicklung eines eingebetteten Systems zur Steuerung einer Prothesenhand mittels EMG-Signalen und maschinellem Lernen.",
        detailedOverview: "Dieser fortschrittliche Prothesenhand-Controller verwendet EMG-Signalverarbeitung und maschinelles Lernen für eine intuitive Steuerung. Das System bietet Echtzeit-Mustererkennung."
      },
      "drone-swarm": {
        title: "Drohnenschwarm-System",
        description: "Entwicklung von Koordinationsalgorithmen für einen Schwarm autonomer Drohnen bei kollaborativen Aufgaben.",
        detailedOverview: "Das Drohnenschwarm-System ermöglicht mehreren autonomen Drohnen eine nahtlose Zusammenarbeit. Das System implementiert verteilte Konsensalgorithmen und Kollisionsvermeidung."
      },
      "robot-arm": {
        title: "Industrieller Roboterarm",
        description: "Entwicklung von Steuerungssystemen für einen 6-DOF Roboterarm mit Echtzeit-Pfadplanung und Hindernisvermeidung.",
        detailedOverview: "Dieser industrielle Roboterarm verfügt über fortschrittliche Steuerungssysteme mit Echtzeit-Pfadplanung und dynamischer Hindernisvermeidung. Das System umfasst inverse Kinematik."
      }
    }
  },
  sv: {
    personal: {
      title: "Robot- och Inbyggda System-ingenjör",
      summary: "Banar väg för framtidens robotik och inbyggda system med över ett decenniums erfarenhet av att designa och implementera banbrytande lösningar. Specialiserad på autonoma system, realtidskontroll och hårdvaruoptimering.",
    },
    sections: {
      projectTimeline: "Projekttidslinje",
      getInTouch: "Kontakta Oss",
      overview: "Översikt",
      technologies: "Teknologier",
      architecture: "Arkitektur"
    },
    contact: {
      name: "Namn",
      email: "E-post",
      message: "Meddelande",
      sendMessage: "Skicka Meddelande",
      sending: "Skickar...",
      success: "Tack! Ditt meddelande har skickats.",
      error: "Tyvärr gick något fel. Försök igen senare."
    },
    projects: {
      "baggage-handling-robot": {
        title: "Automatiserad Bagagehanteringsrobot",
        description: "Utvecklade ett intelligent robotsystem för automatiserad bagagehantering på flygplatser med realtidsspårning och smart ruttplanering.",
        detailedOverview: "Den automatiserade bagagehanteringsroboten revolutionerar flygplatslogistik med sitt avancerade AI-drivna system. Den kombinerar datorseende för bagageigenkänning med smart ruttplanering."
      },
      "autonomous-delivery-robot": {
        title: "Autonom Leveransrobot",
        description: "Utvecklade en autonom leveransrobot som kan navigera i komplexa inomhusmiljöer med hjälp av SLAM och datorseende.",
        detailedOverview: "Vår autonoma leveransrobot representerar ett genombrott inom inomhusnavigering och leveransautomatisering. Systemet använder avancerade SLAM-algoritmer för realtidskartläggning och lokalisering."
      },
      "smart-factory-control": {
        title: "Smart Fabrikskontrollsystem",
        description: "Designade och implementerade ett distribuerat kontrollsystem för automatiserade tillverkningsprocesser med industriella IoT-sensorer.",
        detailedOverview: "Smart Factory-kontrollsystemet revolutionerar tillverkning genom att implementera en helt distribuerad arkitektur. Det har realtidsövervakning och förutsägbart underhåll."
      },
      "prosthetic-hand": {
        title: "Proteshandkontroller",
        description: "Skapade ett inbäddat system för att styra en proteshand med hjälp av EMG-signaler och maskininlärning.",
        detailedOverview: "Denna avancerade proteshandkontroller använder EMG-signalbehandling och maskininlärning för intuitiv kontroll. Systemet har realtidsmönsterigenkänning."
      },
      "drone-swarm": {
        title: "Drönarsvärmssystem",
        description: "Utvecklade koordineringsalgoritmer för en svärm av autonoma drönare som utför samarbetsuppgifter.",
        detailedOverview: "Drönarsvärmssystemet möjliggör för flera autonoma drönare att arbeta tillsammans sömlöst. Systemet implementerar distribuerade konsensusalgoritmer och kollisionsundvikande."
      },
      "robot-arm": {
        title: "Industriell Robotarm",
        description: "Designade kontrollsystem för en 6-DOF robotarm med realtidsvägsplanering och hinderundvikande.",
        detailedOverview: "Denna industriella robotarm har avancerade kontrollsystem med realtidsvägsplanering och dynamiskt hinderundvikande. Systemet inkluderar invers kinematik."
      }
    }
  }
};