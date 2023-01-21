import { Card } from "@/components";
import styled from "styled-components";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { config } from "@/config";

export default function WorkCard() {
  return (
    <Card icon={<BiBriefcaseAlt2 size={24} />} title="Work">
      <Jobs>
        {config.jobs.map((job) => (
          <Job
            key={job.title}
            title={job.title}
            company={job.company}
            date={job.date}
            img={job.image}
          />
        ))}
      </Jobs>
      <button>Download CV ↓</button>
    </Card>
  );
}

const Jobs = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const JobContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const CompanyLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: contain;
  position: relative;
  // box shadow ring
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.gray[500]};
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h5 {
    font-size: 14px;
    font-weight: 300;
  }

  p {
    font-size: 13px;
    font-weight: 300;
  }
`;

const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 300;
`;

function Job({ title, company, date, img }: any) {
  return (
    <JobContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <CompanyLogo src={img} />
        <CompanyDetails>
          <h5>{company}</h5>
          <p>{title}</p>
        </CompanyDetails>
      </div>
      <Date>{date}</Date>
    </JobContainer>
  );
}
