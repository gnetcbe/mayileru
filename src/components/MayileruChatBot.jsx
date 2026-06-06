"use client";

import { useState, useRef, useEffect } from "react";

const SENSITIVE_SERVICES = [
  "Explosive License",
  "Legal Consultancy",
  "Factory Act Certification",
  "Valuation Services",
  "Chartered Engg Certification",
  "Pollution Control Services",
];

const EMERGENCY_SERVICES = ["Explosive License", "Factory Act Certification"];

const SERVICES = [
  "Auditing Services",
  "Industrial Services",
  "Pollution Control Services",
  "Chartered Engg Certification",
  "Explosive License",
  "Factory Act Certification",
  "Valuation Services",
  "Legal Consultancy",
  "Civil",
  "Contact Us",
];

const SUB_TOPICS = {
  "Auditing Services": ["Energy Audit", "Safety Audit", "Environmental Audit", "Steam Audit", "Air Audit"],
  "Industrial Services": ["Ultrasonic Thickness Test", "Custom Crane Design"],
  "Pollution Control Services": ["Pollution Control Consultancy & Turnkey Projects", "PCB Consent Assistance"],
  "Chartered Engg Certification": ["Import of Machinery & Parts", "Technical Certification for Govt Depts", "Nexus Certificate", "Installation Certificate", "Public Building Stability Certificate"],
  "Explosive License": ["Petroleum Storage License", "Gas Storage License", "Safety Valve & Hydraulic Testing"],
  "Factory Act Certification": ["Safety Certification for Equipment", "Factory Layout Drawing Approvals", "Stability, Installation & Construction Certificates", "Onsite Emergency Plan"],
  "Valuation Services": ["Civil & Mechanical Asset Valuation", "Bank & Financial Institution Valuation", "Stock Auditing", "Partition & Division Valuation"],
  "Legal Consultancy": ["Industrial & Commercial Disputes", "Real Estate & Property", "Arbitration & Labour", "Consumer Complaints", "Legal Documentation"],
  "Civil": ["CAD Drawings", "Structural Design", "Project Management", "Surveying & Levelling", "Physical Stock Verification", "RCC Restoration", "Fire Safety Compliance"],
};

const SERVICE_SUMMARY = {
  "Auditing Services": "Our core services include: Energy Audit, Safety Audit, Environmental Audit, Steam Audit, Air Audit.",
  "Industrial Services": "Our core services include: Ultrasonic Thickness Test, Custom Crane Design.",
  "Pollution Control Services": "Our core services include: Pollution Control Consultancy & Turnkey Projects, Assistance in obtaining Consent from the Pollution Control Board.",
  "Chartered Engg Certification": "Our core services include: Certification for Import of Machinery, Technical Certification for Govt Departments, Nexus Certificate, Installation Certificate, Public Building Stability Certificate.",
  "Explosive License": "Our core services include: Licensing for petroleum products storage, Licensing for gas storage, Safety valve testing & hydraulic testing.",
  "Factory Act Certification": "Our core services include: Safety Certification for Equipment, Factory Layout Drawing Approvals, Stability/Installation/Construction Certificates, Onsite Emergency Plan.",
  "Valuation Services": "Our core services include: Civil & Mechanical Asset Valuation, Bank Valuations, Stock Auditing, Partition & Division Valuation.",
  "Legal Consultancy": "Our core services include: Industrial & Commercial Disputes, Real Estate & Property, Arbitration & Labour, Consumer Complaints, Legal Documentation.",
  "Civil": "Our core services include: CAD Drawings, Structural Design, Project Management, Surveying & Levelling, Physical Stock Verification, RCC Restoration, Fire Safety Compliance.",
};

const INTENT_SIGNALS = [
  "i need", "i want", "help me", "can you", "how do i", "how to get",
  "apply for", "obtain", "renew", "certif", "license", "audit my",
  "we need", "our company", "my factory", "interested", "consult",
  "quote", "cost", "fee", "charge", "start", "begin", "proceed",
];

const OPENERS = {
  "Energy Audit": "Certainly! Energy Audits are mandatory for major industries under government regulations. We are a BEE-accredited Energy Auditor certified by the Bureau of Energy Efficiency, Government of India. Our systematic approach has helped numerous industries achieve significant energy savings. How may I assist you?",
  "Safety Audit": "Of course! Safety Audits are mandatory for hazardous industries such as foundries, fertilizer plants, and solvent extraction units under the Factories Act. Our audits are conducted by seasoned professionals including a retired Chief Inspector of Factories. How may I assist you?",
  "Environmental Audit": "Certainly! We conduct Environmental Audits for exporters, domestic firms, and educational institutions. As Chartered Engineers, we are authorized to provide audit reports under the Companies Act and the Pollution Control Act. We have over 15 years of experience in this domain. How may I assist you?",
  "Steam Audit": "Of course! Steam and thermal energy audits are a critical yet often overlooked area of energy conservation. Our audits identify heat losses and recommend solutions that can reduce your fuel bills by up to 10%. How may I assist you?",
  "Air Audit": "Certainly! Compressed air systems typically account for 7–10% of an industry's power bill but operate at only 20–30% efficiency. Our audits help improve efficiency to 50%, resulting in measurable reduction in overall power costs. How may I assist you?",
  "Ultrasonic Thickness Test": "Of course! Monitoring the thickness of pressure vessels, pipelines, and containers is a critical maintenance practice. As Chartered Engineers, we provide authoritative measurement, certification, and recommendations. This service is executed in collaboration with our associate firm MM Associates. How may I assist you?",
  "Custom Crane Design": "Certainly! We offer tailored design solutions for EOT, jib, and gantry cranes to meet your specific requirements. Our deliverables include general assembly drawings, detailed part drawings, and fabrication-ready documentation. How may I assist you?",
  "Pollution Control Consultancy & Turnkey Projects": "Of course! We have been actively involved in pollution control solutions since 1986. We offer tailored wastewater treatment solutions and end-to-end air pollution control from concept to commissioning. ⚠️ Regulatory compliance requires direct consultation with our experts. How may I assist you?",
  "PCB Consent Assistance": "Certainly! Obtaining 'Consent to Establish' and 'Consent to Operate' from the Pollution Control Board can be complex. We streamline the entire process — documentation, technical data, and direct liaison with regulatory authorities. ⚠️ This involves statutory requirements. Please consult our experts for official matters. How may I assist you?",
  "Import of Machinery & Parts": "Of course! Importing spare parts or machinery often requires a Chartered Engineer certificate validating the necessity, specifications, and quantity. We are widely trusted for issuing such certificates after detailed inspection and verification. ⚠️ These are legally binding documents. How may I assist you?",
  "Technical Certification for Govt Depts": "Certainly! Government departments often require technical validation but lack in-house expertise. We act on their behalf by inspecting and certifying technical particulars. With over two decades of experience, we are a reliable authority for such certifications. ⚠️ Official matters require direct consultation. How may I assist you?",
  "Nexus Certificate": "Of course! When capital goods are imported, the Customs Department mandates a Chartered Engineer certificate confirming the equipment is essential for the importer's production. We provide this certification after thorough verification. ⚠️ This is a legally binding document. How may I assist you?",
  "Installation Certificate": "Certainly! This certificate confirms that imported machinery has been properly installed and is operational, fulfilling all conditions of import. Our inspections ensure all parameters are met before certification. ⚠️ Official certification requires direct consultation with our team. How may I assist you?",
  "Public Building Stability Certificate": "Of course! Under the Tamil Nadu Public Building Act, stability certificates are mandatory every three years for schools, colleges, marriage halls, malls, and similar structures. We conduct structural inspections and verify calculations to issue these certificates. ⚠️ This is a statutory requirement. How may I assist you?",
  "Petroleum Storage License": "Certainly! Industries storing petroleum products such as HSD, HFO, and Methanol in large tanks require a permanent explosive license renewable every 10 years. ⚠️ Important: This involves strict safety and regulatory requirements. Please consult our experts at +91-9345732419 for all official matters. How may I assist you?",
  "Gas Storage License": "Of course! For industries planning to store gases such as LPG, Chlorine, or Hydrogen, we provide complete support from designing and planning storage systems to securing licenses from the relevant authorities. ⚠️ Safety and regulatory compliance is critical here. Please contact our experts at +91-9345732419. How may I assist you?",
  "Safety Valve & Hydraulic Testing": "Certainly! Safety valve testing and hydraulic testing of tanks are mandatory safety requirements for industries dealing with petroleum and gas storage. ⚠️ These are safety-critical procedures. Our certified engineers conduct these tests with full compliance. How may I assist you?",
  "Safety Certification for Equipment": "Of course! Industries governed by the Factories Act must periodically test and certify cranes, chain pulley blocks, power presses, and dust extraction systems. We are officially recognized by the Government of Tamil Nadu as a Competent Person to conduct these tests. ⚠️ This is a statutory requirement. How may I assist you?",
  "Factory Layout Drawing Approvals": "Certainly! New factories must obtain approval from the Factory Inspectorate for building plans and machinery layout. With over two decades of experience, we prepare and submit compliant drawings and liaise with authorities. ⚠️ This involves regulatory approval processes. How may I assist you?",
  "Stability, Installation & Construction Certificates": "Of course! Factories are required to obtain Building Stability Certificates every three years and Installation/Construction Certificates following approved changes. Our team conducts thorough inspections and issues the necessary certificates. ⚠️ These are statutory certificates. How may I assist you?",
  "Onsite Emergency Plan": "Certainly! Hazardous industries dealing with fertilizers, chemicals, and solvents must prepare a detailed Onsite Emergency Plan covering hazard identification, evacuation procedures, and personnel training. We also offer Risk Analysis services. ⚠️ This is a mandatory requirement for classified hazardous industries. How may I assist you?",
  "Civil & Mechanical Asset Valuation": "Of course! As registered valuers, we specialize in assessing land, buildings, plant, and machinery. Our valuations are accepted for income tax, sales tax, central excise, and government submissions. ⚠️ Official valuations require physical inspection by our team. How may I assist you?",
  "Bank & Financial Institution Valuation": "Certainly! We are empanelled with leading institutions including SBI, ICICI, Canara Bank, Axis Bank, and many others. With over 30,000 completed valuations, our reports are delivered within 2–3 working days. ⚠️ Official bank valuations require direct engagement with our team. How may I assist you?",
  "Stock Auditing": "Of course! We conduct detailed stock audits for industries on behalf of their banking partners — classifying goods, assigning market values, and comparing physical stock with book records. Supported by Chartered Accountants. ⚠️ Official stock audits require direct consultation. How may I assist you?",
  "Partition & Division Valuation": "Certainly! We provide impartial valuation services for asset partition among individuals and detailed item-wise valuation reports for company mergers or divisions. ⚠️ These valuations carry legal weight and require direct engagement with our team. How may I assist you?",
  "Industrial & Commercial Disputes": "Of course! Our Legal Cell handles industrial and commercial disputes with technical precision and legal expertise. Led by Mr. RM. Mayileru, a practicing advocate. ⚠️ This is for general guidance only. Legal representation requires direct consultation with our legal team. How may I assist you?",
  "Real Estate & Property": "Certainly! We handle real estate and property matters including documentation, disputes, and compliance. ⚠️ Legal advice and representation require direct consultation with our legal professionals. How may I assist you?",
  "Arbitration & Labour": "Of course! We represent clients in arbitration proceedings and labour disputes, bringing both technical and legal expertise to complex industrial matters. ⚠️ Please consult our legal team directly for case-specific guidance. How may I assist you?",
  "Consumer Complaints": "Certainly! We assist clients in filing and pursuing consumer complaints, ensuring their rights are protected effectively. ⚠️ For specific legal advice, please consult our legal team directly. How may I assist you?",
  "Legal Documentation": "Of course! We prepare legal documents in both English and Tamil, covering a wide range of industrial, commercial, and personal matters. ⚠️ Official legal documentation requires direct consultation with our legal professionals. How may I assist you?",
  "CAD Drawings": "Certainly! We specialize in creating precise AutoCAD drawings for industrial, civil, and mechanical applications — suitable for documentation, fabrication, or machinery replication. How may I assist you?",
  "Structural Design": "Of course! Using advanced tools like STAAD.Pro, we design RCC, steel, and hybrid structures for industries including foundries, textile mills, food processing units, and chemical plants. How may I assist you?",
  "Project Management": "Certainly! We provide end-to-end project monitoring and management, acting as a single point of contact to coordinate architects, engineers, contractors, and vendors. How may I assist you?",
  "Surveying & Levelling": "Of course! Using Total Station and Theodolite, we provide accurate surveying and leveling services including topographical sketches, excavation estimates, and land area compilation. How may I assist you?",
  "Physical Stock Verification": "Certainly! Using Total Station technology, we provide precise volume assessments for bulk materials such as coal, minerals, and raw stocks — eliminating guesswork and manual errors. How may I assist you?",
  "RCC Restoration": "Of course! We specialize in restoring damaged or leaking RCC structures without dismantling, using imported chemicals and proven techniques. Restoration is typically completed within 2–3 days. How may I assist you?",
  "Fire Safety Compliance": "Certainly! All non-residential buildings require a Fire Department NOC. We prepare and submit plans that comply with the National Building Code, ensuring full compliance and efficient approvals. How may I assist you?",
};

function getOpener(subtopic) {
  return OPENERS[subtopic] || `Certainly! I would be glad to assist you with ${subtopic}. Please feel free to share your requirements and our team will provide the appropriate guidance.`;
}

function buildSystemPrompt(service, subtopic, leadCollected) {
  const isSensitive = SENSITIVE_SERVICES.includes(service);
  const isEmergency = EMERGENCY_SERVICES.includes(service);

  return `You are a professional and formal support assistant for RM. MAYILERU & Co., a multidisciplinary technical consulting firm established in 1979, based in Coimbatore, Tamil Nadu, India.

TONE & PERSONALITY:
- Always maintain a professional, formal, and respectful tone
- Be informative and helpful — never leave a query unanswered
- Explain technical concepts clearly without being condescending
- Ask relevant follow-up questions to understand the client's specific requirements
- Keep responses concise (4-6 lines), then ask a follow-up question
- Never use casual language or introduce yourself by name
- Do NOT mention placeholder text like [Your Name]

CURRENT CONTEXT:
${service && service !== "General" ? `- Service: ${service}` : "- General Enquiry"}
${subtopic && subtopic !== "General" ? `- Topic: ${subtopic}` : ""}

DISCLAIMER RULE (VERY IMPORTANT):
- A disclaimer has ALREADY been shown to the client separately in a yellow box
- Do NOT repeat or include any disclaimer text in your responses
- Do NOT add "Please note: This information is for general guidance only..." in your messages
- Keep responses clean and informative without repeating warnings
${isSensitive ? `
SENSITIVITY NOTICE — ${service}:
- This involves regulatory compliance, legal matters, or safety-critical matters
- Never provide definitive legal advice or regulatory decisions
- For complex matters, suggest contacting our team directly
` : ""}
${isEmergency ? `
SAFETY NOTICE:
- This involves strict safety requirements
- Emphasize safety compliance naturally in responses
` : ""}

LEAD COLLECTION:
${leadCollected
    ? "Client details already collected. Do NOT ask for name, email or phone again."
    : `- Watch for genuine interest signals (e.g. "I need", "how do I apply", "can you help", "our company needs")
- When detected, naturally say: "I would be happy to arrange a consultation. May I have your name, please?"
- Only trigger ONCE per conversation`
  }

ABOUT RM. MAYILERU & Co.:
- Founded: 1979 by Mr. RM. Mayileru (Mechanical Engineering graduate, ex-Ashok Leyland)
- Formally established: 1983 | Team: 20 professionals | 6 graduate engineers + legal wing
- Founder is also a practicing advocate
- Philosophy: "A client has the right to be wrong" — we educate and empower clients

SERVICES:
1. AUDITING — Energy Audit (BEE Accredited), Safety Audit, Environmental Audit (15+ years), Steam Audit (up to 10% fuel savings), Air Audit (improve efficiency from 20-30% to 50%)
2. INDUSTRIAL — Ultrasonic Thickness Testing (with MM Associates), Custom Crane Design (EOT, jib, gantry)
3. POLLUTION CONTROL — Consultancy & Turnkey (since 1986), PCB Consent (Establish & Operate)
4. CHARTERED ENGG CERT — Import certification, Govt technical certification, Nexus certificate, Installation certificate, Public Building Stability Certificate (every 3 years under TN Public Building Act)
5. EXPLOSIVE LICENSE — Petroleum storage (permanent license, 10-year renewal, up to 50KL = ₹5000/year), Gas storage (LPG, Chlorine, Hydrogen), Safety valve & hydraulic testing
6. FACTORY ACT — Safety certification for cranes/power presses/dust extraction (Govt TN recognized Competent Person), Layout approvals, Stability/Installation/Construction certs, Onsite Emergency Plans, Risk Analysis
7. VALUATION — 30,000+ valuations, empanelled with SBI, ICICI, Canara, Axis, BoB, BoI, UCO, IDBI, HUDCO, BSNL, PF Dept, Registration Dept. Reports in 2-3 working days
8. LEGAL — Industrial/commercial disputes, Real estate, Arbitration, Labour, Consumer complaints, Legal docs (English & Tamil). Led by Mr. RM. Mayileru (advocate) + 2 legal professionals
9. CIVIL — CAD drawings (AutoCAD), Structural design (STAAD.Pro, RCC/steel/hybrid), Project management, Surveying (Total Station), Physical stock verification, RCC restoration (2-3 days), Fire safety compliance

CONTACT:
- Office: 25C, Alamu Nagar, 3rd Street 2nd Cross, Sathy Main Road, Gandhipuram, Coimbatore - 641012
- Email: mayileruandco@gmail.com
- Phone: +91-422-2497455, +91-9345732419, +91-9443857739, +91-9842231761, +91-8778325799

STRICT RULES:
1. Only discuss RM. MAYILERU & Co. services
2. Add disclaimer for sensitive/legal/explosive matters
3. Never make definitive legal or regulatory decisions
4. If unsure — direct to +91-9345732419
5. Never discuss competitors`;
}

export default function MayileruChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadStep, setLeadStep] = useState("idle");
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [currentService, setCurrentService] = useState("");
  const [currentSubtopic, setCurrentSubtopic] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackStars, setFeedbackStars] = useState(0);
  const [feedbackHover, setFeedbackHover] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [showEndOptions, setShowEndOptions] = useState(false);
  const [showIdlePrompt, setShowIdlePrompt] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [disclaimerShown, setDisclaimerShown] = useState(false);
  const [showDisclaimerPopup, setShowDisclaimerPopup] = useState(false);

  const bottomRef = useRef(null);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const resetIdleTimer = () => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setShowIdlePrompt(false);
    idleTimerRef.current = setTimeout(() => setShowIdlePrompt(true), 60000);
  };

  useEffect(() => {
    if (breadcrumbs.length >= 1 && messages.length > 0 && !showFeedback) resetIdleTimer();
    return () => { if (idleTimerRef.current) clearTimeout(idleTimerRef.current); };
  }, [messages, breadcrumbs.length, showFeedback]);

  const addMessage = (role, text, isDisclaimer = false) => {
    setMessages((prev) => [...prev, { role, text, isDisclaimer }]);
  };

  const handleClear = () => {
    setMessages([]); setInput(""); setLoading(false);
    setLeadStep("idle"); setLeadData({ name: "", email: "", phone: "" });
    setBreadcrumbs([]); setCurrentService(""); setCurrentSubtopic(""); setChatHistory([]);
    setShowFeedback(false); setFeedbackStars(0); setFeedbackSubmitted(false);
    setShowEndOptions(false); setShowIdlePrompt(false); setShowCallbackForm(false); setDisclaimerShown(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
  };

  const handleEndChat = () => setShowFeedback(true);

  const handleFeedbackSubmit = async () => {
    const chatText = messages.map((m) => `${m.role === "user" ? "Client" : "Support"}: ${m.text}`).join("\n");
    await fetch("/api/mayileru-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isFeedback: true,
        feedback: {
          stars: feedbackStars,
          visitor: leadData.name ? leadData : { name: "Anonymous", phone: "Unknown", email: "Unknown" },
          service: currentService || "General",
          subtopic: currentSubtopic || "",
          chatText,
        },
      }),
    }).catch(console.error);
    setFeedbackSubmitted(true);
    setTimeout(() => handleClear(), 2500);
  };

  const removeBreadcrumb = (index) => {
    const newCrumbs = breadcrumbs.slice(0, index);
    setBreadcrumbs(newCrumbs);
    if (index === 0) { setCurrentService(""); setCurrentSubtopic(""); setMessages([]); setChatHistory([]); }
    else if (index === 1) { setCurrentSubtopic(""); setMessages([]); setChatHistory([]); }
    setLeadStep("idle"); setShowFeedback(false); setShowEndOptions(false);
  };

  const handleServiceClick = (service) => {
    if (service === "Contact Us") {
      setCurrentService("Contact Us");
      setBreadcrumbs([{ label: "Contact Us", level: "service" }]);
      setMessages([]);
      setTimeout(() => addMessage("bot",
        "Thank you for reaching out to RM. MAYILERU & Co.\n\n📍 25C, Alamu Nagar, 3rd Street 2nd Cross,\n    Sathy Main Road, Gandhipuram,\n    Coimbatore - 641012\n\n📧 mayileruandco@gmail.com\n\n📞 +91-422-2497455\n📞 +91-9345732419\n📞 +91-9443857739\n📞 +91-9842231761\n📞 +91-8778325799\n\nPlease feel free to ask anything else."
      ), 100);
      return;
    }
    setCurrentService(service);
    setBreadcrumbs([{ label: service, level: "service" }]);
    setCurrentSubtopic(""); setMessages([]); setChatHistory([]);
    setShowFeedback(false); setShowEndOptions(false); setLeadStep("idle");
  };

  const handleSubtopicClick = (subtopic) => {
    setCurrentSubtopic(subtopic);
    setBreadcrumbs([
      { label: currentService, level: "service" },
      { label: subtopic, level: "subtopic" },
    ]);
    setMessages([]); setChatHistory([]); setLeadStep("idle");
    setShowFeedback(false); setShowEndOptions(false);

    const opener = getOpener(subtopic);
    setTimeout(() => {
      addMessage("bot", opener);
      // Show disclaimer once for ALL services on first message
      setTimeout(() => {
        addMessage("bot",
          "⚠️ Please note: Information provided here is for general guidance only. For official certifications, legal matters, or regulatory compliance, kindly contact our experts directly at +91-9345732419.",
          true
        );
        setDisclaimerShown(true);
      }, 600);
    }, 100);
  };

  const handleRequestCallback = () => {
    setShowCallbackForm(false);
    setLeadStep("ask_name");
    setBreadcrumbs([{ label: "Callback Request", level: "service" }]);
    setCurrentService("Callback Request");
    addMessage("bot", "Certainly! I shall arrange a callback for you.\n\nMay I have your name, please?");
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setInput("");
    setShowIdlePrompt(false);
    resetIdleTimer();

    if (!currentService) {
      setCurrentService("General");
      setBreadcrumbs([{ label: "General Enquiry", level: "service" }]);
    }

    addMessage("user", trimmed);

    // Lead collection — all mandatory
    if (leadStep === "ask_name") {
      setLeadData((d) => ({ ...d, name: trimmed }));
      setLeadStep("ask_email");
      addMessage("bot", `Thank you, ${trimmed}. May I have your email address, please?`);
      return;
    }
    if (leadStep === "ask_email") {
      setLeadData((d) => ({ ...d, email: trimmed }));
      setLeadStep("ask_phone");
      addMessage("bot", "Thank you. May I have your contact number as well?");
      return;
    }
    if (leadStep === "ask_phone") {
      const finalLead = { ...leadData, phone: trimmed };
      setLeadData(finalLead);
      setLeadStep("done");
      fetch("/api/mayileru-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          isLead: true,
          lead: finalLead,
          service: currentService || "General",
          subtopic: currentSubtopic || "",
          chatHistory: messages,
        }),
      }).catch(console.error);
      addMessage("bot", `Thank you, ${finalLead.name}. Our team will contact you at ${finalLead.phone} at the earliest convenience. Please feel free to continue with any further questions.`);
      return;
    }

    // Ending phrases
    const lowerMsg = trimmed.toLowerCase();
    const endingPhrases = ["ok thanks", "okay thanks", "thank you", "thanks", "bye", "goodbye", "ok bye", "got it", "noted", "alright", "that's all", "thats all", "no thanks"];
    const isEnding = endingPhrases.some((p) => lowerMsg.trim() === p || lowerMsg.trim() === p + "!" || lowerMsg.trim() === p + ".");
    if (isEnding && (leadStep === "idle" || leadStep === "done")) {
      addMessage("bot", "Thank you for reaching out to RM. MAYILERU & Co. It was a pleasure assisting you. What would you like to do next?");
      setShowEndOptions(true);
      return;
    }

    // Intent detection
    const hasIntent = INTENT_SIGNALS.some((s) => lowerMsg.includes(s));
    if (leadStep === "idle" && hasIntent) setLeadStep("ask_name");

    // Gemini AI
    setLoading(true);
    try {
      const systemPrompt = buildSystemPrompt(currentService || "General", currentSubtopic || "General", leadStep === "done");
      const newHistory = [...chatHistory, { role: "user", parts: [{ text: trimmed }] }];
      const res = await fetch("/api/mayileru-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, systemPrompt, history: chatHistory }),
      });
      const data = await res.json();
      const botReply = data.reply || "I apologise for the inconvenience. Please contact us directly at +91-9345732419 or mayileruandco@gmail.com.";

      const geminiWantsLead = botReply.toLowerCase().includes("may i have your name") || botReply.toLowerCase().includes("your name, please");
      addMessage("bot", botReply);
      setChatHistory([...newHistory, { role: "model", parts: [{ text: botReply }] }]);

      if (leadStep === "idle" && (hasIntent || geminiWantsLead)) {
        setTimeout(() => {
          setLeadStep("ask_name");
          addMessage("bot", "I would be glad to arrange a consultation for you. May I have your name, please?");
        }, 800);
      }
    } catch {
      addMessage("bot", "I apologise for the inconvenience. Please contact our team at +91-9345732419.");
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const showServiceGrid = breadcrumbs.length === 0;
  const showSubtopics = breadcrumbs.length === 1 && currentService && currentService !== "Contact Us" && currentService !== "General" && currentService !== "Callback Request";
  const showChat = breadcrumbs.length === 2 || (breadcrumbs.length === 1 && (currentService === "Contact Us" || currentService === "General" || currentService === "Callback Request")) || (messages.length > 0 && breadcrumbs.length >= 1);

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-label="Open support chat" className="rm-chat-toggle">
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="rm-chat-window">
          {/* Header */}
          <div className="rm-chat-header">
            <div className="rm-chat-header-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className="rm-chat-header-info">
              <div className="rm-chat-header-name">RM. MAYILERU & Co. — Support</div>
              <div className="rm-chat-header-status">
                <span className="rm-online-dot" />
                Online · Technical Consulting Experts
              </div>
            </div>
            <div className="rm-header-actions">
              {showChat && <button onClick={handleEndChat} className="rm-end-btn">End Chat</button>}
              <button onClick={handleClear} className="rm-clear-btn" title="Reset">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="rm-breadcrumbs">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="rm-breadcrumb-tag">
                  {crumb.label}
                  <button onClick={() => removeBreadcrumb(i)} className="rm-breadcrumb-x">✕</button>
                </span>
              ))}
            </div>
          )}

          {/* Body */}
          <div className="rm-chat-body">

            {/* Feedback Overlay */}
            {showFeedback && (
              <div className="rm-feedback-overlay">
                {feedbackSubmitted ? (
                  <div className="rm-feedback-thanks">
                    <div style={{ fontSize: "36px" }}>🙏</div>
                    <div className="rm-feedback-thanks-text">Thank you for your valuable feedback!</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Resetting shortly...</div>
                  </div>
                ) : (
                  <div className="rm-feedback-box">
                    <div className="rm-feedback-title">How was your experience?</div>
                    <div className="rm-feedback-sub">Please rate your interaction with our Support</div>
                    <div className="rm-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="rm-star-btn"
                          onMouseEnter={() => setFeedbackHover(star)}
                          onMouseLeave={() => setFeedbackHover(0)}
                          onClick={() => setFeedbackStars(star)}>
                          <svg width="34" height="34" viewBox="0 0 24 24" fill={star <= (feedbackHover || feedbackStars) ? "#f59e0b" : "#e2e8f0"}>
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                    {feedbackStars > 0 && (
                      <div className="rm-feedback-label">
                        {["", "Poor", "Fair", "Good", "Very Good", "Excellent!"][feedbackStars]}
                      </div>
                    )}
                    <div className="rm-feedback-actions">
                      <button className="rm-feedback-submit" onClick={handleFeedbackSubmit} disabled={feedbackStars === 0}>Submit Feedback</button>
                      <button className="rm-feedback-skip" onClick={handleClear}>Skip</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Screen 1: Service Grid */}
            {showServiceGrid && !showFeedback && (
              <div className="rm-screen">
                <div className="rm-welcome">
                  <div className="rm-welcome-icon">🏛️</div>
                  <div>
                    <div className="rm-welcome-title">Welcome to RM. MAYILERU & Co.</div>
                    <div className="rm-welcome-sub">Established 1979 · Coimbatore · 45+ Years of Excellence</div>
                  </div>
                </div>
                <div className="rm-service-label">Please select a service or type your enquiry below:</div>
                <div className="rm-service-grid">
                  {SERVICES.map((s) => (
                    <button key={s} className="rm-service-tag" onClick={() => handleServiceClick(s)}>{s}</button>
                  ))}
                </div>
                <button className="rm-callback-btn" onClick={() => setShowCallbackForm(true)}>📞 Request a Callback</button>
                {showCallbackForm && (
                  <div className="rm-callback-box">
                    <div className="rm-callback-text">Our experts will call you back at the earliest convenience.</div>
                    <button className="rm-callback-confirm" onClick={handleRequestCallback}>Proceed</button>
                    <button className="rm-callback-cancel" onClick={() => setShowCallbackForm(false)}>Cancel</button>
                  </div>
                )}
              </div>
            )}

            {/* Screen 2: Sub-topics */}
            {showSubtopics && !showFeedback && (
              <div className="rm-screen">
                <div className="rm-subtopic-header">
                  What would you like to know about <strong>{currentService}</strong>?
                  <div className="rm-subtopic-summary">{SERVICE_SUMMARY[currentService]}</div>
                </div>
                <div className="rm-service-grid">
                  {(SUB_TOPICS[currentService] || []).map((t) => (
                    <button key={t} className="rm-service-tag" onClick={() => handleSubtopicClick(t)}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Screen 3: Chat */}
            {showChat && !showSubtopics && !showFeedback && (
              <div className="rm-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`rm-msg-row ${msg.role}`}>
                    <div className={`rm-msg-bubble ${msg.role}${msg.isDisclaimer ? " disclaimer" : ""}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="rm-msg-row bot">
                    <div className="rm-msg-bubble bot rm-typing"><span /><span /><span /></div>
                  </div>
                )}
                {showEndOptions && (
                  <div className="rm-end-options">
                    <button className="rm-end-opt-btn continue" onClick={() => setShowEndOptions(false)}>💬 Continue Conversation</button>
                    <button className="rm-end-opt-btn menu" onClick={() => { setShowEndOptions(false); handleClear(); }}>🏛️ Return to Main Menu</button>
                    <button className="rm-end-opt-btn end" onClick={() => { setShowEndOptions(false); handleEndChat(); }}>⭐ End & Rate Session</button>
                  </div>
                )}
                {showIdlePrompt && (
                  <div className="rm-idle-prompt">
                    <div className="rm-idle-text">Are you still there? Would you like to continue or conclude this session?</div>
                    <div className="rm-idle-actions">
                      <button className="rm-end-opt-btn continue" onClick={() => { setShowIdlePrompt(false); resetIdleTimer(); }}>💬 Continue</button>
                      <button className="rm-end-opt-btn end" onClick={() => { setShowIdlePrompt(false); handleEndChat(); }}>⭐ End & Rate</button>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </div>

          {/* Input */}
          {!showFeedback && (
            <div className="rm-chat-input-row">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey} placeholder="Type your enquiry here..." className="rm-chat-input" />
              <button onClick={handleSend} disabled={!input.trim() || loading} className={`rm-send-btn${input.trim() ? " active" : ""}`}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill={input.trim() ? "white" : "#aaa"}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          )}

          <div className="rm-chat-footer">
            RM. MAYILERU & Co. · Est. 1979 · Coimbatore
            <button className="rm-disclaimer-link" onClick={() => setShowDisclaimerPopup(true)}>⚠️ Disclaimer</button>
          </div>

          {/* Disclaimer Popup */}
          {showDisclaimerPopup && (
            <div className="rm-disclaimer-popup-overlay" onClick={() => setShowDisclaimerPopup(false)}>
              <div className="rm-disclaimer-popup" onClick={(e) => e.stopPropagation()}>
                <div className="rm-disclaimer-popup-title">⚠️ Important Disclaimer</div>
                <div className="rm-disclaimer-popup-text">
                  Information provided by this assistant is for general guidance only. It does not constitute official advice, certification, or legal opinion.{" "}
                  For official certifications, legal matters, regulatory compliance, or any statutory requirements, kindly consult our experts directly.
                </div>
                <div className="rm-disclaimer-popup-contact">
                  📞 +91-9345732419 &nbsp;|&nbsp; 📧 mayileruandco@gmail.com
                </div>
                <button className="rm-disclaimer-popup-close" onClick={() => setShowDisclaimerPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      )}

     <style suppressHydrationWarning>{`
        .rm-chat-toggle {
          position: fixed; bottom: 24px; right: 24px; z-index: 9999;
          width: 60px; height: 60px; border-radius: 50%;
          background: linear-gradient(135deg, #1e2265, #2e3192);
          border: none; cursor: pointer;
          box-shadow: 0 4px 20px rgba(46,49,146,0.5);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.2s ease;
        }
        .rm-chat-toggle:hover { transform: scale(1.1); }
        .rm-chat-window {
          position: fixed; bottom: 96px; right: 24px; z-index: 9998;
          width: 370px; max-height: 520px;
          border-radius: 14px; box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          display: flex; flex-direction: column; overflow: hidden;
          background: #fff; font-family: 'Segoe UI', system-ui, sans-serif;
          animation: rmSlideIn 0.25s ease;
        }
        .rm-chat-header {
          background: linear-gradient(135deg, #1e2265, #2e3192);
          padding: 12px 14px; display: flex; align-items: center; gap: 10px;
        }
        .rm-chat-header-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .rm-chat-header-info { flex: 1; min-width: 0; }
        .rm-chat-header-name { color: #fff; font-weight: 700; font-size: 12.5px; line-height: 1.3; }
        .rm-chat-header-status { color: rgba(255,255,255,0.8); font-size: 10.5px; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
        .rm-online-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; display: inline-block; flex-shrink: 0; }
        .rm-header-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
        .rm-end-btn {
          background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.4);
          color: white; font-size: 11px; font-weight: 600;
          padding: 4px 9px; border-radius: 10px; cursor: pointer;
          transition: background 0.2s; white-space: nowrap;
        }
        .rm-end-btn:hover { background: rgba(255,255,255,0.3); }
        .rm-clear-btn {
          background: rgba(255,255,255,0.15); border: none; cursor: pointer;
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .rm-clear-btn:hover { background: rgba(255,255,255,0.3); }
        .rm-breadcrumbs {
          padding: 7px 12px; background: #eef0f8;
          display: flex; flex-wrap: wrap; gap: 6px;
          border-bottom: 1px solid #dde0f0;
        }
        .rm-breadcrumb-tag {
          display: inline-flex; align-items: center; gap: 5px;
          background: #2e3192; color: white;
          padding: 3px 10px; border-radius: 16px; font-size: 11.5px; font-weight: 500;
        }
        .rm-breadcrumb-x { background: none; border: none; color: white; cursor: pointer; font-size: 9px; padding: 0; opacity: 0.8; }
        .rm-breadcrumb-x:hover { opacity: 1; }
        .rm-chat-body { flex: 1; overflow-y: auto; background: #f8f9fc; position: relative; min-height: 200px; }
        .rm-screen { padding: 14px; }
        .rm-welcome {
          display: flex; gap: 10px; align-items: flex-start;
          background: linear-gradient(135deg, #1e2265, #2e3192);
          border-radius: 10px; padding: 13px; margin-bottom: 14px; color: white;
        }
        .rm-welcome-icon { font-size: 22px; flex-shrink: 0; }
        .rm-welcome-title { font-weight: 700; font-size: 13.5px; margin-bottom: 3px; }
        .rm-welcome-sub { font-size: 11px; opacity: 0.85; }
        .rm-subtopic-header {
          font-size: 13px; font-weight: 600; color: #1e2265;
          margin-bottom: 12px; line-height: 1.5;
        }
        .rm-subtopic-summary {
          font-size: 11.5px; color: #475569; font-weight: 400;
          margin-top: 5px; line-height: 1.6;
        }
        .rm-service-label { font-size: 11.5px; color: #64748b; margin-bottom: 9px; font-weight: 500; }
        .rm-service-grid { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
        .rm-service-tag {
          padding: 5px 12px; border-radius: 16px;
          border: 1.5px solid #2e3192; background: #fff;
          color: #2e3192; font-size: 12px; font-weight: 500;
          cursor: pointer; transition: all 0.15s;
        }
        .rm-service-tag:hover { background: #2e3192; color: #fff; }
        .rm-callback-btn {
          width: 100%; padding: 9px; border-radius: 8px;
          background: #f0f1fa; border: 1.5px solid #2e3192;
          color: #2e3192; font-size: 12.5px; font-weight: 600;
          cursor: pointer; transition: all 0.15s; text-align: center;
        }
        .rm-callback-btn:hover { background: #2e3192; color: white; }
        .rm-callback-box {
          margin-top: 10px; background: #fff; border: 1px solid #dde0f0;
          border-radius: 8px; padding: 12px; text-align: center;
        }
        .rm-callback-text { font-size: 12px; color: #475569; margin-bottom: 10px; }
        .rm-callback-confirm { padding: 7px 20px; background: #2e3192; color: white; border: none; border-radius: 20px; font-size: 12px; cursor: pointer; margin-right: 8px; }
        .rm-callback-cancel { padding: 7px 20px; background: #f1f5f9; color: #64748b; border: none; border-radius: 20px; font-size: 12px; cursor: pointer; }
        .rm-messages { padding: 12px; display: flex; flex-direction: column; gap: 9px; }
        .rm-msg-row { display: flex; }
        .rm-msg-row.user { justify-content: flex-end; }
        .rm-msg-row.bot { justify-content: flex-start; }
        .rm-msg-bubble {
          max-width: 84%; padding: 9px 13px; font-size: 13px;
          line-height: 1.6; box-shadow: 0 1px 4px rgba(0,0,0,0.07);
          white-space: pre-wrap; word-break: break-word;
        }
        .rm-msg-bubble.user { background: linear-gradient(135deg, #1e2265, #2e3192); color: #fff; border-radius: 16px 16px 4px 16px; }
        .rm-msg-bubble.bot { background: #fff; color: #1a1a2e; border-radius: 16px 16px 16px 4px; }
        .rm-msg-bubble.disclaimer { background: #fff8e6; color: #92400e; border: 1px solid #fcd34d; border-radius: 8px; font-size: 12px; }
        .rm-typing { display: flex; gap: 5px; align-items: center; padding: 12px 14px; }
        .rm-typing span { width: 7px; height: 7px; border-radius: 50%; background: #2e3192; display: inline-block; animation: rmBounce 1.2s ease infinite; }
        .rm-typing span:nth-child(2) { animation-delay: 0.2s; }
        .rm-typing span:nth-child(3) { animation-delay: 0.4s; }
        .rm-feedback-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #f8f9fc; display: flex; align-items: center; justify-content: center; z-index: 20; padding: 20px; }
        .rm-feedback-box { background: white; border-radius: 14px; padding: 22px 18px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.1); width: 100%; }
        .rm-feedback-title { font-size: 16px; font-weight: 700; color: #2e3192; margin-bottom: 5px; }
        .rm-feedback-sub { font-size: 12px; color: #64748b; margin-bottom: 18px; }
        .rm-stars { display: flex; justify-content: center; gap: 5px; margin-bottom: 8px; }
        .rm-star-btn { background: none; border: none; cursor: pointer; padding: 2px; transition: transform 0.15s; }
        .rm-star-btn:hover { transform: scale(1.2); }
        .rm-feedback-label { font-size: 13px; font-weight: 600; color: #f59e0b; margin-bottom: 14px; min-height: 20px; }
        .rm-feedback-actions { display: flex; flex-direction: column; gap: 8px; }
        .rm-feedback-submit { padding: 9px; border-radius: 20px; background: linear-gradient(135deg, #1e2265, #2e3192); color: white; border: none; font-size: 13px; font-weight: 600; cursor: pointer; }
        .rm-feedback-submit:disabled { opacity: 0.4; cursor: not-allowed; }
        .rm-feedback-skip { background: none; border: none; color: #94a3b8; font-size: 12px; cursor: pointer; }
        .rm-feedback-thanks { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .rm-feedback-thanks-text { font-size: 16px; font-weight: 700; color: #2e3192; }
        .rm-end-options { display: flex; flex-direction: column; gap: 6px; margin: 4px 0 8px 0; }
        .rm-end-opt-btn { padding: 8px 12px; border-radius: 20px; border: none; cursor: pointer; font-size: 12.5px; font-weight: 500; text-align: left; transition: opacity 0.2s; }
        .rm-end-opt-btn:hover { opacity: 0.85; }
        .rm-end-opt-btn.continue { background: #eef0f8; color: #2e3192; }
        .rm-end-opt-btn.menu { background: #f0fdf4; color: #16a34a; }
        .rm-end-opt-btn.end { background: #fff7ed; color: #ea580c; }
        .rm-idle-prompt { background: #fefce8; border: 1.5px solid #fde68a; border-radius: 10px; padding: 11px 13px; margin: 4px 0; }
        .rm-idle-text { font-size: 12.5px; color: #78350f; margin-bottom: 9px; line-height: 1.5; }
        .rm-idle-actions { display: flex; gap: 7px; }
        .rm-idle-actions .rm-end-opt-btn { flex: 1; text-align: center; padding: 7px; font-size: 12px; }
        .rm-chat-input-row { padding: 10px 12px; border-top: 1px solid #eef0f8; display: flex; gap: 8px; background: #fff; }
        .rm-chat-input { flex: 1; padding: 8px 13px; border-radius: 20px; border: 1.5px solid #dde0f0; outline: none; font-size: 13px; background: #f8f9fc; color: #1a1a2e; transition: border-color 0.2s; }
        .rm-chat-input:focus { border-color: #2e3192; }
        .rm-send-btn { width: 38px; height: 38px; border-radius: 50%; background: #e2e8f0; border: none; cursor: not-allowed; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.2s; }
        .rm-send-btn.active { background: linear-gradient(135deg, #1e2265, #2e3192); cursor: pointer; }

        /* Disclaimer footer link */
        .rm-chat-footer { text-align: center; padding: 5px; font-size: 10.5px; color: #aaa; background: #fff; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .rm-disclaimer-link { background: none; border: none; color: #f59e0b; font-size: 10.5px; cursor: pointer; padding: 0; text-decoration: underline; }
        .rm-disclaimer-link:hover { color: #d97706; }

        /* Disclaimer popup */
        .rm-disclaimer-popup-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.5);
          z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .rm-disclaimer-popup {
          background: #fff; border-radius: 12px; padding: 20px;
          max-width: 340px; width: 100%; box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .rm-disclaimer-popup-title { font-size: 14px; font-weight: 700; color: #92400e; margin-bottom: 10px; }
        .rm-disclaimer-popup-text { font-size: 12.5px; color: #475569; line-height: 1.6; margin-bottom: 12px; }
        .rm-disclaimer-popup-contact { font-size: 12px; color: #2e3192; font-weight: 600; margin-bottom: 14px; }
        .rm-disclaimer-popup-close {
          width: 100%; padding: 8px; border-radius: 20px;
          background: linear-gradient(135deg, #1e2265, #2e3192);
          color: white; border: none; font-size: 13px; cursor: pointer;
        }

        @keyframes rmSlideIn { from { opacity: 0; transform: translateY(16px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes rmBounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-6px); } }
        @media (max-width: 400px) { .rm-chat-window { width: calc(100vw - 20px); right: 10px; bottom: 80px; } }
      `}</style>
    </>
  );
}
