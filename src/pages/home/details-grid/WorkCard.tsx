import { Card } from "@/components";
import styled from "styled-components";
import { BiBriefcaseAlt2 } from "react-icons/bi";

export default function WorkCard() {
  return (
    <Card icon={<BiBriefcaseAlt2 size={24} />} title="Work">
      <Jobs>
        <Job
          title="Software Engineer"
          company="Impact Suite"
          date="2021 - Present"
          img="data:image/png;base64,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"
        />
        <Job
          title="Developer / Mentor"
          company="Devmountain"
          date="2021 - 2021"
          img="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750"
        />
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
